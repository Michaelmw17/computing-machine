import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
import { ThemeProvider as LegacyThemeProvider } from '@mui/styles';
import { LazyMotion } from 'framer-motion';
// Only the antd components we actually use: base reset + Row/Col + Drawer.
// Importing antd/dist/antd.css pulls 670+ KB of styles for every antd component;
// per-component imports cut that to ~130 KB and unblock first paint. The base
// style import is required — Row/Col and the rest of the page rely on antd's
// normalize/reset (box-sizing, body margin, etc.).
import 'antd/lib/style/index.css';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/drawer/style/index.css';
import Router from './router';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// MUI v5: @mui/styles (makeStyles) needs an explicit theme — v4 used to inject
// one automatically. Both providers are required while makeStyles call-sites
// remain.
const muiTheme = createTheme();

// Load framer-motion animation features asynchronously so the ~25 KB of
// `domAnimation` code doesn't block first paint. `m.*` renders immediately
// without animations until the features chunk resolves.
const loadAnimationFeatures = () =>
  import('framer-motion').then((mod) => mod.domAnimation);

// StyledEngineProvider injectFirst makes emotion inject MUI's styles before
// our hand-written CSS so .call-us-button / .light / etc. can override MUI
// defaults the same way they did in v4 with JSS.
const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <LegacyThemeProvider theme={muiTheme}>
          <LazyMotion features={loadAnimationFeatures} strict>
            <Router />
          </LazyMotion>
        </LegacyThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);

const container = document.getElementById('root');
const root = createRoot(container);

// Pre-warm the Home chunk in parallel with the rest of the boot path so that
// by the time we mount, lazy(Home) resolves synchronously and React doesn't
// need to fall back to <Suspense fallback={null}> (which would unmount the
// static skeleton and leave a blank screen mid-load).
const homeReady = import('./pages/Home');

// Pre-warm the Contact chunk too. The shell's "Contact Us" anchor points at
// #Team, which lives in the Contact section. On slow 3G we measured the
// Contact chunk taking ~1.9 s — that's how long the form anchor target is
// missing after React mounts. Kicking off the request here makes it overlap
// the rest of the boot path instead of waiting for React's first commit.
import('./sections/Contact');

// Defer React's first render until the browser has painted the static
// skeleton (logo + heading + hero image) so LCP records the preloaded hero
// at ~1 s instead of the React-rendered one at ~5 s. requestIdleCallback
// fires after first paint + idle; the 1500 ms timeout is the upper bound so
// we never strand the app on a busy main thread.
const mount = () => {
  homeReady.then(() => root.render(<App />));
};
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(mount, { timeout: 1500 });
} else {
  setTimeout(mount, 200);
}

// Unregister: the service worker was adding IndexedDB/cache init overhead on
// first paint and stale-asset risk on deploys without much benefit for a small
// static landing page. Run register() if you want offline support back.
serviceWorkerRegistration.unregister();
