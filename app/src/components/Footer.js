import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="top_footer bg_light_dark" data-z-index={1} data-parallax="scroll" data-image-src={require('../images/footer_bg.png')}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="footer_logo mb-3 animation" data-animation="fadeInUp" data-animation-delay="0.2s"> 
                  <a href="#home_section" className="page-scroll">
                    <h4>NAUH ICO</h4>
                  </a> 
                </div>
                <div className="footer_desc">
                  <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Cryptocash stands firmly in support of financial freedom and the liberty that Bitcoin provides globally for anyone to voluntarily participate in a permissionless and decentralized network.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20">
                <h4 className="footer_title border_title animation" data-animation="fadeInUp" data-animation-delay="0.2s">Quick Links</h4>
                <ul className="footer_link list_arrow">
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a href="#">Nauh ICO</a></li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.3s"><a href="#">How It Works</a></li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><a href="#">Tokens</a></li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.5s"><a href="#">FAQ</a></li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
                <div className="newsletter_form">
                  <h4 className="footer_title border_title animation" data-animation="fadeInUp" data-animation-delay="0.2s">Newsletter</h4>
                  <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">By subscribing to our mailing list you will always be update with the latest news from us.</p>
                  <form className="subscribe_form animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                    <input className="input-rounded" type="text" required placeholder="Enter Email Address" />
                    <button type="submit" title="Subscribe" className="btn-info" name="submit" value="Submit"> Subscribe </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="copyright">Copyright © 2018 All Rights Reserved.</p>
              </div>
              <div className="col-md-6">
                <ul className="list_none footer_menu">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="scrollup btn-default"><i className="ion-ios-arrow-up"></i></a> 
      </footer>
    );
  }
}

export default Footer
