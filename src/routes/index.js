/* eslint-disable no-unused-vars*/
import React from 'react';
/* eslint-enable no-unused-vars*/
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Home from 'containers/Home/';
import App from 'containers/App/';

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default Routes;
