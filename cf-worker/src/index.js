/**
 * JDP Electrical — Contact form proxy.
 *
 * Receives form submissions from the React site and forwards them to EmailJS
 * using server-side secrets, so the EmailJS keys never appear in browser
 * source. Also enforces origin allow-list, honeypot, time-gate, and field
 * length limits at the edge.
 *
 * Deploy: see ../README.md
 */

const ALLOWED_ORIGINS = [
  'https://www.jdpelectrical.com.au',
  'https://jdpelectrical.com.au',
];

const MIN_FORM_AGE_MS = 3000; // bots submit instantly; humans take seconds
const MAX_FIELD_LENGTHS = {
  firstName: 100,
  number: 30,
  email: 120,
  suburb: 80,
  menu: 60,
  message: 2000,
};

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const corsAllowedOrigin = ALLOWED_ORIGINS.includes(origin)
      ? origin
      : ALLOWED_ORIGINS[0];

    // ----- CORS preflight ---------------------------------------------------
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(corsAllowedOrigin),
      });
    }

    if (request.method !== 'POST') {
      return json(405, { error: 'Method not allowed' }, corsAllowedOrigin);
    }

    if (!ALLOWED_ORIGINS.includes(origin)) {
      return json(403, { error: 'Origin not allowed' }, corsAllowedOrigin);
    }

    // ----- Parse body -------------------------------------------------------
    let body;
    try {
      body = await request.json();
    } catch {
      return json(400, { error: 'Invalid JSON' }, corsAllowedOrigin);
    }

    // ----- Spam gates -------------------------------------------------------
    // Honeypot — bots fill every input; real users never see this field.
    if (body.website) {
      return json(200, { ok: true }, corsAllowedOrigin); // silent accept
    }
    // Time-gate — instant submission is bot behaviour.
    if (
      typeof body.formAgeMs !== 'number' ||
      body.formAgeMs < MIN_FORM_AGE_MS
    ) {
      return json(200, { ok: true }, corsAllowedOrigin); // silent accept
    }

    // ----- Field validation -------------------------------------------------
    if (!body.firstName || !body.number || !body.message) {
      return json(400, { error: 'Missing required fields' }, corsAllowedOrigin);
    }
    for (const [field, max] of Object.entries(MAX_FIELD_LENGTHS)) {
      if (body[field] && body[field].length > max) {
        return json(400, { error: `Field ${field} too long` }, corsAllowedOrigin);
      }
    }

    // ----- Forward to EmailJS ----------------------------------------------
    const templateParams = {
      firstName: body.firstName,
      number: body.number,
      message: body.message,
      email: body.email || '',
      suburb: body.suburb || '',
      menu: body.menu || '',
      subject:
        body.subject || `Website enquiry from ${body.firstName || 'a visitor'}`,
    };

    const emailjsBody = {
      service_id: env.EMAILJS_SERVICE_ID,
      template_id: env.EMAILJS_TEMPLATE_ID,
      user_id: env.EMAILJS_PUBLIC_KEY,
      template_params: templateParams,
    };

    let emailjsResponse;
    try {
      emailjsResponse = await fetch(
        'https://api.emailjs.com/api/v1.0/email/send',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Pretend to be a browser call from the prod origin. EmailJS
            // accepts this because Origin-based allow-listing is their auth.
            Origin: 'https://www.jdpelectrical.com.au',
            Referer: 'https://www.jdpelectrical.com.au/',
          },
          body: JSON.stringify(emailjsBody),
        }
      );
    } catch (err) {
      return json(502, { error: 'Mail provider unreachable' }, corsAllowedOrigin);
    }

    if (!emailjsResponse.ok) {
      const text = await emailjsResponse.text();
      console.error('EmailJS error', emailjsResponse.status, text);
      return json(
        502,
        { error: 'Mail provider rejected', status: emailjsResponse.status },
        corsAllowedOrigin
      );
    }

    return json(200, { ok: true }, corsAllowedOrigin);
  },
};

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function json(status, payload, origin) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(origin),
    },
  });
}
