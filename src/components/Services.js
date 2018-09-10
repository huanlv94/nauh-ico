import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <section id="service" className="small_pb small_pt">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
              <div className="title_default_light title_border text-center">
                <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Meet our solution for you</h4>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                <img src={require("../images/service_icon1.png")} alt="service_icon1" />
                <h4>Secure Storage</h4>
                <p>your wallet must be secured. Bitcoin makes it possible to transfer value any where in a very easy way and it allows you to be in control of your money.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                <img src={require("../images/service_icon2.png")} alt="service_icon2" />
                <h4>Mobile App</h4>
                <p>The #1 most popular cryptocurrency wallet for those looking to transform the financial system right from their pocket. Cash instantly with anyone in the world.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay="1s">
                <img src={require("../images/service_icon3.png")} alt="service_icon3" />
                <h4>Exchange Service</h4>
                <p>Each user has unique needs, so there is no one size fits all for exchanges. Our Bitcoin exchange reviews detail each exchange's supported countries</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay="1s">
                <img src={require("../images/service_icon4.png")} alt="service_icon4" />
                <h4>Investment projects</h4>
                <p>Bitcoin investment opportunities exist outside of simply speculating on the Bitcoin exchange rate. sell bitcoins and profit from extreme changes</p>
              </div>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-12">
              <div className="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay="1s">
                <img src={require("../images/service_icon5.png")} alt="service_icon5" />
                <h4>Credit Card Use</h4>
                <p>We are accept any credit or debit card from VISA or MasterCard. This option may be especially useful for those seek ing for the ways</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay="1s">
                <img src={require("../images/service_icon6.png")} alt="service_icon6" />
                <h4>Planning</h4>
                <p>A cutting edge issue in traditional estate planning is Cryptocash. Cryptocash is a digital or virtual currency that uses cryptography for security</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
