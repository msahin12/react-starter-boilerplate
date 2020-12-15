import { lazy, Suspense, Fragment } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const HomePage = lazy(() =>
  import(
    "PAGES/HomePage"
    /* webpackChunkName: "HomePage" */
    /* webpackPrefetch: true */
  )
);

const LoginPage = lazy(() =>
  import(
    "PAGES/LoginPage"
    /* webpackChunkName: "LoginPage" */
    /* webpackPrefetch: true */
  )
);

const NotFoundPage = lazy(() =>
  import(
    "PAGES/NotFoundPage"
    /* webpackChunkName: "NotFoundPage" */
    /* webpackPrefetch: true */
  )
);

const UnderConstructionPage = "Under Construction";

export const MainRouter = () => {
  const isLoggedIn = false;

  return (
    <BrowserRouter>
      <Suspense fallback="">
        <Switch>
          <Route path="/login" component={LoginPage} exact />
          <Route path="/" component={HomePage} exact />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
