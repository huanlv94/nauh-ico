import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../layouts/Dashboard'
import UserManager from '../components/UserManager'

const Routes = props => (
  <Switch>
    <Route
      exact
      path="/"
      component={routeProps => (
        <Dashboard routeProps={routeProps} {...props} />
      )}
    />
    <Route
      exact
      path="/buy-demo"
      component={routeProps => (
        <UserManager routeProps={routeProps} {...props} />
      )}
    />
  </Switch>
);

export default Routes