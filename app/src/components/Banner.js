import React, { Component } from "react"
import { Link } from 'react-router-dom'

class Banner extends Component {
  render() {
    return <section id="home_section" className="section_banner small_pb bg_black_dark" data-z-index={1} data-parallax="scroll" data-image-src={require("../images/banner_img2.png")}>
        <canvas id="banner_canvas" className="transparent_effect fixed" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
              <div className="banner_text text_md_center">
                <h1 className="animation" data-animation="fadeInUp" data-animation-delay="1.1s">
                  Bitcoin is an innovative payment network and a new kind of money.
                </h1>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="1.3s">
                  The mining starts immediately after confirmed payment. First payouts within 24 hours.{" "}
                </p>
                <div className="btn_group animation" data-animation="fadeInUp" data-animation-delay="1.4s">
                  <a href="#whitepaper" className="btn btn-default btn-radius nav-link content-popup">
                    Whitepaper <i className="ion-ios-arrow-thin-right" />
                  </a>
                  <Link to="/buy-demo" className="btn btn-border btn-radius">
                    Buy Token Now! <i className="ion-ios-arrow-thin-right" />
                  </Link>
                </div>
                <div id="whitepaper" className="team_pop mfp-hide">
                  <div className="row m-0">
                    <div className="col-md-7">
                      <div className="pt-3 pb-3">
                        <div className="title_dark title_border">
                          <h4>Download Whitepaper</h4>
                          <p>
                            A purely peer-to-peer version of electronic cash
                            would allow online payments to be sent directly
                            from one party to another without going through
                            a financial institution.Digital signatures
                            provide part of the solution, but the main
                            benefits are lost if a trusted third party is
                            still required to prevent double-spending.
                          </p>
                          <p>
                            The network timestamps transactions by hashing
                            them into an ongoing chain of hash-based
                            proof-of-work, forming a record that cannot be
                            changed without redoing the proof-of-work.
                          </p>
                          <a href="#" className="btn btn-default btn-radius">
                            Download Now <i className="ion-ios-arrow-thin-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <img className="pt-3 pb-3" src={require("../images/whitepaper.png")} alt="whitepaper" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 order-first">
              <div className="banner_image_right res_md_mb_50 res_xs_mb_30 animation" data-animation-delay="1.5s" data-animation="fadeInRight">
                <img alt="banner_vector2" src={require("../images/banner_img2.png")} />
              </div>
            </div>
          </div>
        </div>
      </section>;
  }
}

export default Banner;
