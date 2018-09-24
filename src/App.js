import React, { Component } from 'react'

import { HashRouter,
Route, Switch, browserHistory } from 'react-router-dom'
import Dashboard from './layouts/Dashboard'
import UserManager from './components/UserManager'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  render() {
    return (
      <HashRouter history={browserHistory}>
        <Switch>
          <Route
            exact
            path="/"
            component={routeProps => (
              <Dashboard routeProps={routeProps} {...this.props} />
            )}
          />
          <Route
            path="/buy-demo"
            component={routeProps => (
              <UserManager routeProps={routeProps} {...this.props} />
            )}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default App
