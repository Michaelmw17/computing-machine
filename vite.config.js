import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const reactAppDefines = Object.keys(env)
    .filter((key) => key.startsWith('REACT_APP_'))
    .reduce((acc, key) => {
      acc[`process.env.${key}`] = JSON.stringify(env[key]);
      return acc;
    }, {});

  return {
    plugins: [react()],
    publicDir: 'public',
    base: './',
    build: {
      outDir: 'build',
      sourcemap: false,
    },
    server: {
      port: 3000,
      open: true,
    },
    preview: {
      port: 3000,
      // Mirror the security headers Amplify will apply in production (see
      // public/customHttp.yml). This makes `npm run build && npm run start`
      // a local rehearsal of the prod CSP — if the map renders and the
      // browser console is free of CSP violations here, prod will be too.
      // NOT applied to the dev server (`server.headers`) because Vite's
      // HMR client uses WebSockets and module-loading patterns that would
      // need a relaxed policy.
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy':
          'geolocation=(), microphone=(), camera=(), payment=()',
        'Content-Security-Policy':
          "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.tile.openstreetmap.org; font-src 'self'; connect-src 'self' https://jdp-contact-proxy.michaelmw17.workers.dev; base-uri 'self'; object-src 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests",
      },
    },
    define: {
      'process.env.PUBLIC_URL': JSON.stringify(''),
      'process.env.NODE_ENV': JSON.stringify(mode),
      ...reactAppDefines,
    },
  };
});
