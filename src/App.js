import React, { Component } from 'react'
// Components
import Loader from './components/Loader'
import Header from './components/Header'
import Banner from './components/Banner'
import Services from './components/Services'
import About from './components/About'
import Sale from './components/sale'
import Proceeds from './components/Proceeds'
import MobileApp from './components/MobileApp'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Faq from './components/Faq'
import UserManager from './components/UserManager'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  render() {
    return <div className="App">
        <Loader />
        <Header />
        <Banner />
        <Services />
        <About />
        <Sale />
        <Proceeds />
        <MobileApp />
        <Roadmap />
        <Contact />
        <Faq />
        <Footer />
        {/* <UserManager {...this.props} /> */}
      </div>;
  }
}

export default App
