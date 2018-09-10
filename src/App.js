import React, { Component } from 'react'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/app'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  render() {
    return (
      <BrowserRouter>
        { Routes(this.props) }
      </BrowserRouter>
    );
  }
}

export default App
