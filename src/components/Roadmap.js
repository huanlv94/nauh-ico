import React, { Component } from "react";

class Roadmap extends Component {
  render() {
    return (
      <section id="roadmap" className="small_pb">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="title_default_light title_border text-center">
                <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Roadmap</h4>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate currency for transactions.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="roadmap_wrap owl-carousel small_space text-center">
                <div className="item">
                  <div className="box_roadmap rd_complete">
                    <div className="roadmap_inner">
                      <div className="roadmap_icon" />
                      <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Aprile 2018</h6>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Inotial Coin Distribution &amp; maketing</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box_roadmap rd_complete">
                    <div className="roadmap_inner">
                      <div className="roadmap_icon" />
                      <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">February 2018</h6>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Exchange Cryptocash to Bitcoin</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box_roadmap">
                    <div className="roadmap_inner">
                      <div className="roadmap_icon" />
                      <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">March 2018</h6>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">BTCC mode of payment in Cryptocash</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box_roadmap">
                    <div className="roadmap_inner">
                      <div className="roadmap_icon" />
                      <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">June 2018</h6>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Send-Receive coin Cryptocash &amp; mobile</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box_roadmap">
                    <div className="roadmap_inner">
                      <div className="roadmap_icon" />
                      <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Aprile 2018</h6>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Inotial Coin Distribution &amp; maketing</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box_roadmap">
                    <div className="roadmap_inner">
                      <div className="roadmap_icon" />
                      <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">October 2018</h6>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Coin Marketcap, World Coin Index</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box_roadmap">
                    <div className="roadmap_inner">
                      <div className="roadmap_icon" />
                      <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">December 2018</h6>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Online &amp; Trading ICO Token Sale</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Roadmap
