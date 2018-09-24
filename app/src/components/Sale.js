import React, { Component } from "react";

class Sale extends Component {
  render() {
    return (
      <section id="token" className="section_token token_sale bg_light_dark" data-z-index={1} data-parallax="scroll" data-image-src={require("../images/token_bg.png")}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
              <div className="title_default_light title_border text-center">
                <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Token Sale</h4>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Join the industry leaders to discuss where the markets are heading. We accept token payments. </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="pr_box">
                <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Starting time :</h6>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Jul 23, 2018 (Mon 9:00 AM)</p>
              </div>
              <div className="pr_box">
                <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">Ending time :</h6>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.8s">Dec 18, 2018 (Mon 11:00 PM)</p>
              </div>
              <div className="pr_box">
                <h6 className="animation" data-animation="fadeInUp" data-animation-delay="1s">Tokens exchange rate</h6>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="1.2s">1 ETH = 10000 NAUH, 1 BTC = 20000 NAUH</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="token_sale res_md_mb_40 res_md_mt_40 res_sm_mb_30 res_sm_mt_30">
                <div className="tk_countdown text-center animation token_countdown_bg" data-animation="fadeIn" data-animation-delay="1s">
                  <div className="tk_counter_inner">
                    <div className="tk_countdown_time animation" data-animation="fadeInUp" data-animation-delay="1.2s" data-time="2018/09/06 00:00:00" />
                    <div className="progress animation" data-animation="fadeInUp" data-animation-delay="1.3s">
                      <div className="progress-bar progress-bar-striped gradient" role="progressbar" aria-valuenow={46} aria-valuemin={0} aria-valuemax={100} style={{ width: '46%' }}> 46% </div>
                      <span className="progress_label bg-white" style={{ left: '30%' }}> <strong> 46,000 NAUH </strong></span>
                      <span className="progress_label bg-white" style={{ left: '75%' }}> <strong> 100,000 NAUH </strong></span>
                      <span className="progress_min_val">Sale Raised</span>
                      <span className="progress_max_val">Soft-caps</span>
                    </div>
                    <a href="#" className="btn btn-default btn-radius animation" data-animation="fadeInUp" data-animation-delay="1.4s">Buy Tokens <i className="ion-ios-arrow-thin-right" /></a>
                    <ul className="icon_list list_none d-flex justify-content-center">
                      <li className="animation" data-animation="fadeInUp" data-animation-delay="1.5s"><i className="fa fa-cc-visa" /></li>
                      <li className="animation" data-animation="fadeInUp" data-animation-delay="1.6s"><i className="fa fa-cc-mastercard" /></li>
                      <li className="animation" data-animation="fadeInUp" data-animation-delay="1.7s"><i className="fa fa-bitcoin" /></li>
                      <li className="animation" data-animation="fadeInUp" data-animation-delay="1.8s"><i className="fa fa-paypal" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="pr_box">
                <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Low - High 24h :</h6>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">$ 6,455.83 - $ 7,071.42</p>
              </div>
              <div className="pr_box">
                <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">Number of tokens for sale</h6>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.8s">1,000,000 NAUH (9%)</p>
              </div>
              <div className="pr_box">
                <h6 className="animation" data-animation="fadeInUp" data-animation-delay="1s">Acceptable Currency :</h6>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="1.2s">BTC, Eth, Ltc</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Sale
