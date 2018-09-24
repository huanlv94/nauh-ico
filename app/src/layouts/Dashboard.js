import React, { Component } from 'react'
// Components
import Loader from '../components/Loader'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Services from '../components/Services'
import About from '../components/About'
import Sale from '../components/Sale'
import Proceeds from '../components/Proceeds'
import MobileApp from '../components/MobileApp'
import Roadmap from '../components/Roadmap'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Faq from '../components/Faq'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="Dashboard">
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
      </div>
    )
  }
}

export default Dashboard
