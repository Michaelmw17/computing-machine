# Migrating jdpelectrical.com.au from AWS Amplify to Cloudflare Pages

A future-reference playbook. **Not urgent** — Amplify costs ~1¢/month and
works fine. Only do this if you want to:

- Get the site off the AWS us-east-2 (Ohio) origin
- Consolidate onto Cloudflare (your contact-form Worker is already there)
- Drop the AWS billing relationship on an Australian business

**Time:** ~15 min hands-on + ~30 min – 4 hr waiting for DNS to propagate.

---

## What the current setup looks like (as of May 2026)

- **Site:** Vite static build, output in `build/`
- **Hosting:** AWS Amplify (CloudFront in front of S3, us-east-2 origin)
- **DNS:** Apex points at `dg4qekxny7tjp.cloudfront.net.` (Amplify)
- **Custom headers:** `public/customHttp.yml` (Amplify-only format)
- **Contact form:** Cloudflare Worker `jdp-contact-proxy.michaelmw17.workers.dev`
  — already on Cloudflare, no changes needed during migration
- **Email:** Microsoft 365 (`MX → jdpelectrical-com-au.mail.protection.outlook.com`)
- **SPF:** `v=spf1 include:secureserver.net -all` — **this is already
  wrong** (says GoDaddy, but mail is on M365). Should be
  `include:spf.protection.outlook.com`. **Don't fix during migration** —
  port as-is, fix as a separate one-line change later.
- **Registrar:** Instra (Domain Directors Pty Ltd) — log in at instra.com
  or whichever reseller brand you bought through

---

## Step 1 — Capture all email DNS records (do this first, BEFORE any changes)

M365 uses 5+ DNS records, not just MX. Lose them and email breaks in
hard-to-diagnose ways. Run:

```sh
dig jdpelectrical.com.au MX +short
dig jdpelectrical.com.au TXT +short
dig autodiscover.jdpelectrical.com.au CNAME +short
dig selector1._domainkey.jdpelectrical.com.au CNAME +short
dig selector2._domainkey.jdpelectrical.com.au CNAME +short
dig _dmarc.jdpelectrical.com.au TXT +short
dig sip.jdpelectrical.com.au CNAME +short
dig lyncdiscover.jdpelectrical.com.au CNAME +short
dig _sipfederationtls._tcp.jdpelectrical.com.au SRV +short
```

Save the output. Every non-empty line is a record you must preserve.

---

## Step 2 — Add Pages-native config files to the repo

### `public/_headers`

Port `customHttp.yml` to Cloudflare's format:

```
/index.html
  Cache-Control: no-cache, no-store, must-revalidate
  Pragma: no-cache

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=()
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://jdp-contact-proxy.michaelmw17.workers.dev; base-uri 'self'; object-src 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests
```

### `public/_redirects`

SPA fallback for react-router:

```
/*  /index.html  200
```

Vite copies `public/` straight into `build/`, so these end up at the
deploy root automatically. Commit and push.

---

## Step 3 — Create the Cloudflare Pages project

1. dash.cloudflare.com → **Workers & Pages → Create → Pages → Connect to Git**
2. Pick the repo
3. Settings:
   - **Build command:** `npm ci --legacy-peer-deps && npm run build`
   - **Build output directory:** `build`
   - **Environment variable:** `REACT_APP_CONTACT_API_URL=https://jdp-contact-proxy.michaelmw17.workers.dev`
4. Deploy. You'll get a `*.pages.dev` preview URL.
5. **Test the preview URL thoroughly:** routing works, contact form submits,
   images load. Do this before touching DNS.

---

## Step 4 — Add the domain to Cloudflare DNS

1. Cloudflare dash → **+ Add → Existing domain** → `jdpelectrical.com.au` → **Free** plan
2. Cloudflare scans existing DNS. **Compare every line to your Step 1 output.**
   For anything Cloudflare missed, click **Add record** and add it manually.
3. **Critical:** all email-related records (MX, SPF TXT, DKIM CNAMEs,
   autodiscover, DMARC) must be set to **DNS only / grey cloud**. Never
   orange-cloud them — Cloudflare proxying breaks email.
4. Leave the existing Amplify A/CNAME alone for now — Step 6 replaces it.
5. Cloudflare gives you two nameservers (`xxx.ns.cloudflare.com`). Keep
   the tab open.

---

## Step 5 — Point Instra at Cloudflare's nameservers

1. Log in at **instra.com** (or whichever reseller brand you used)
2. My Domains → `jdpelectrical.com.au` → **Nameservers**
3. Switch from default to **Custom nameservers**
4. Enter the two Cloudflare nameservers from Step 4
5. Save

Then in Cloudflare → click **Done, check nameservers**.

**Wait.** .au domains usually activate in 30 min – 4 hr. Cloudflare emails
you when ready. To check yourself:

```sh
dig NS jdpelectrical.com.au +short
```

When this returns Cloudflare nameservers, you're done waiting. The site
keeps serving from Amplify during this whole window — no visible change.

**Send yourself a test email** to confirm M365 still works before continuing.

---

## Step 6 — Attach the domain to Pages

Only after Step 5 shows Cloudflare nameservers AND your Pages preview
works correctly.

1. Cloudflare dash → **Workers & Pages → your Pages project → Custom domains**
2. **Set up a custom domain** → `jdpelectrical.com.au` → accept the
   warning that it will replace the Amplify A record
3. Repeat for `www.jdpelectrical.com.au`
4. Wait ~2 min for SSL cert provisioning (green check)
5. Test in incognito: both URLs should load from Pages, contact form works

Brief downtime during this step: usually <60 seconds globally.

---

## Step 7 — Decommission Amplify

Only after Step 6 is fully verified and stable for ~48 hours (lets DNS
caches everywhere expire):

1. AWS Amplify Console → your app → **App settings → General → Delete app**
2. (Optional) Delete `amplify.yml` and `public/customHttp.yml` from the
   repo — they're dead weight on Pages

---

## Gotchas, in priority order

1. **M365 needs more than just MX.** If you skip Step 1 you'll lose
   DKIM/autodiscover and not notice for days while outbound mail goes to
   spam. This is the #1 risk.
2. **Never orange-cloud email records.** Cloudflare's proxy breaks
   MX/SPF/DKIM. Email records must be **DNS only / grey cloud.**
3. **The SPF is already broken.** Port `include:secureserver.net` as-is
   during migration. Fix to `include:spf.protection.outlook.com` as a
   separate change afterwards so you can isolate any issues.
4. **Don't delete Amplify for 48h** after Step 6 — some ISPs cache the
   old A record. Old visitors hit Amplify (still works), new visitors
   hit Cloudflare.
5. **Instra reseller branding.** If `instra.com` login doesn't work, the
   portal may be at the brand you bought through (netregistry, distributeit,
   etc.) — same backend.
6. **No changes needed to:** `vite.config.js`, the cf-worker, the CSP
   (it already references the worker URL).
