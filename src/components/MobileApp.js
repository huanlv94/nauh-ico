import React, { Component } from "react";

class MobileApp extends Component {
  render() {
    return (
      <section id="mobileapp" className="bg_light_dark" data-z-index={1} data-parallax="scroll" data-image-src={require("../images/app_bg.png")}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="title_default_light title_border text_md_center">
                <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Download Mobile App</h4>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate currency for transactions. Bitcoin is the first ever cryptocurrency and is used like other assets in exchange for goods and services.</p>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">Send, receive, and exchange Bitcoin, Ethereum, &amp; Bitcoin Cash instantly with anyone in the world. Securely buy and sell bitcoin alongside your already safely stored cryptocurrency. </p>
              </div>
              <div className="btn_group text_md_center animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                <a href="#" className="btn btn-default btn-radius"><em className="ion-social-android" />Google Store </a>
                <a href="#" className="btn btn-default btn-radius"><em className="ion-social-apple" />Apple Store</a>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="res_md_mt_50 res_sm_mt_30 text-center animation" data-animation="fadeInRight" data-animation-delay="0.2s">
                <img src={require("../images/mobile_app3.png")} alt="mobile_app3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MobileApp
