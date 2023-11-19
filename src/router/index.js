import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './config';
import GlobalStyles from '../globalStyles';
const Home = lazy(() => import('../pages/Home'));

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
              component={lazy(() => import(`../pages/${routeItem.component}`))}
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
