import React, { Component } from "react";

class Proceeds extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 res_md_mb_40">
              <div className="title_default_light title_border text-center">
                <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Token Sale Proceeds</h4>
              </div>
              <div className="lg_pt_20 res_sm_pt_0 text-center animation" data-animation="fadeInRight" data-animation-delay="0.2s">
                <img src={require("../images/sale-proceeds3.png")} alt="sale-proceeds3" />
              </div>
              <div className="divider small_divider" />
              <ul className="list_none list_chart text-center">
                <li>
                  <span className="chart_bx color1" />
                  <span>Addvisers</span>
                </li>
                <li>
                  <span className="chart_bx color2" />
                  <span>Marketing</span>
                </li>
                <li>
                  <span className="chart_bx color3" />
                  <span>Public Sale</span>
                </li>
                <li>
                  <span className="chart_bx color4" />
                  <span>Pre Sale</span>
                </li>
                <li>
                  <span className="chart_bx color5" />
                  <span>Projects</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="title_default_light title_border text-center">
                <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Token Distribution</h4>
              </div>
              <div className="lg_pt_20 res_sm_pt_0 text-center animation" data-animation="fadeInLeft" data-animation-delay="0.2s">
                <img src={require("../images/distribution3.png")} alt="distribution3" />
              </div>
              <div className="divider small_divider" />
              <ul className="list_none list_chart text-center">
                <li>
                  <span className="chart_bx color1" />
                  <span>ICO Sale</span>
                </li>
                <li>
                  <span className="chart_bx color4" />
                  <span>Build Out</span>
                </li>
                <li>
                  <span className="chart_bx color2" />
                  <span>Team &amp; Advisers</span>
                </li>
                <li>
                  <span className="chart_bx color5" />
                  <span>Private Investors</span>
                </li>
                <li>
                  <span className="chart_bx color3" />
                  <span>Bounty</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Proceeds;
