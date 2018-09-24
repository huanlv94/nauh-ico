import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header_wrap fixed-top">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand page-scroll animation" href="#home_section" data-animation="fadeInDown" data-animation-delay="1s">
              {/* <img className="logo_light" src="logo.png" alt="logo" /> */}
              <h3>Nauh ICO Coin</h3>
            </a>
            <button className="navbar-toggler animation" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-animation="fadeInDown" data-animation-delay="1.1s">
              <span className="fa fa-home" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                <li className="dropdown animation" data-animation="fadeInDown" data-animation-delay="1.1s"><a className="nav-link active" href="#">Home</a></li>
                <li className="animation" data-animation="fadeInDown" data-animation-delay="1.2s"><a className="nav-link page-scroll nav_item" href="#service">Services</a></li>
                <li className="animation" data-animation="fadeInDown" data-animation-delay="1.3s"><a className="nav-link page-scroll nav_item" href="#about">About</a></li>
                <li className="animation" data-animation="fadeInDown" data-animation-delay="1.4s"><a className="nav-link page-scroll nav_item" href="#token">Token</a></li>
                <li className="animation" data-animation="fadeInDown" data-animation-delay="1.5s"><a className="nav-link page-scroll nav_item" href="#roadmap">Road Map</a></li>
                <li className="animation" data-animation="fadeInDown" data-animation-delay="1.6s"><a className="nav-link page-scroll nav_item" href="#team">Team</a></li>
                <li className="animation" data-animation="fadeInDown" data-animation-delay="1.7s"><a className="nav-link page-scroll nav_item" href="#faq">FAQ</a></li>
                <li className="animation" data-animation="fadeInDown" data-animation-delay="1.8s"><a className="nav-link page-scroll nav_item" href="#contact">Contact</a></li>
              </ul>
              {/* <ul className="navbar-nav nav_btn align-items-center">
                <li className="animation" data-animation="fadeInDown" data-animation-delay="2s"><a className="btn btn-default btn-radius nav_item" href="#">Login</a></li>
                <li className="animation" data-animation="fadeInDown" data-animation-delay="2.1s"><a className="nav-link nav_item" href="#">Sign Up</a></li>
              </ul> */}
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
