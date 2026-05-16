# JDP Contact Form Proxy (Cloudflare Worker)

A tiny Cloudflare Worker that receives contact-form submissions from
`jdpelectrical.com.au` and forwards them to EmailJS using server-side
secrets. This keeps the EmailJS service/template/public keys out of the
browser bundle, so scraping the frontend source no longer exposes them.

The Worker also enforces:

- Origin allow-list (only the production domains can POST)
- Honeypot (`website` field)
- Time-gate (submission must be at least 3 seconds after form mount)
- Field length limits

## One-time setup

1. **Create a free Cloudflare account** at https://dash.cloudflare.com/sign-up
   (no credit card needed for the Workers free tier — 100,000 requests/day).

2. **Install dependencies and log in:**

   ```bash
   cd cf-worker
   npm install
   npx wrangler login
   ```

   This opens a browser to authenticate with Cloudflare.

3. **Set the EmailJS secrets** (you'll be prompted for each value):

   ```bash
   npx wrangler secret put EMAILJS_SERVICE_ID
   # paste: service_a9ktqlp

   npx wrangler secret put EMAILJS_TEMPLATE_ID
   # paste: template_l0mglga

   npx wrangler secret put EMAILJS_PUBLIC_KEY
   # paste: user_yw3a8DYtaKOIm8KcBtk2L
   ```

   Secrets are stored encrypted in Cloudflare and exposed to the Worker as
   `env.EMAILJS_*`. They never appear in source code or the deployed bundle.

4. **Deploy:**

   ```bash
   npm run deploy
   ```

   Wrangler will print the public Worker URL, e.g.:

   ```
   Published jdp-contact-proxy
     https://jdp-contact-proxy.<your-subdomain>.workers.dev
   ```

5. **Plug that URL into the React app:**

   In the root of the React project (one level up), edit `.env.local`:

   ```
   REACT_APP_CONTACT_API_URL=https://jdp-contact-proxy.<your-subdomain>.workers.dev
   ```

   And in **AWS Amplify Console → App settings → Environment variables**,
   add the same key with the same value. Then trigger a redeploy.

## Day-to-day

- **View live logs:** `npm run tail`
- **Local dev** (Worker talks to real EmailJS): `npm run dev` (serves on
  http://localhost:8787; point `REACT_APP_CONTACT_API_URL` at it during
  local development if needed).
- **Rotate a secret:** re-run `wrangler secret put <NAME>` and redeploy.

## Custom domain (optional but recommended)

The default `*.workers.dev` URL works fine but you can put the Worker behind
`api.jdpelectrical.com.au` if you ever move the domain DNS to Cloudflare.
Until then, the `workers.dev` URL is production-ready.
