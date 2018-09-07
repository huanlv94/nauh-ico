import React, {
  Component
} from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      web3: null,
      nvcPrice: 5
    }
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="App">Hello !!!!</div>
    )
  }
}

export default App
