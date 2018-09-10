import React, { Component } from 'react'

import { BrowserRouter,
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
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route
            exact
            path="/"
            component={routeProps => (
              <Dashboard routeProps={routeProps} {...this.props} />
            )}
          />
          <Route
            exact
            path="/buy-demo"
            component={routeProps => (
              <UserManager routeProps={routeProps} {...this.props} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
