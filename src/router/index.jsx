import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './config';
import GlobalStyles from '../globalStyles';

// Home is lazy-loaded again now that the static skeleton in index.html covers
// LCP. Splitting it out drops ~400 KB of unminified JS (Header, ContentBlock,
// antd Drawer, MUI icons, etc.) from the main bundle, cutting TBT noticeably.
const Home = lazy(() => import('../pages/Home'));

// Fallback is null on purpose: the static skeleton in index.html is what the
// user actually sees during the Home chunk download, and rendering nothing in
// React's tree means React doesn't unmount the skeleton until Home is ready.
const Router = () => {
  return (
    <Suspense fallback={null}>
      <GlobalStyles />
      <Switch>
        {/* Removes trailing slashes */}
        <Route
          path="/:url*(/+)"
          exact
          strict
          render={({ location }) => (
            <Redirect to={location.pathname.replace(/\/+$/, '')} />
          )}
        />
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}/index.jsx`))}
            />
          );
        })}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Router;
