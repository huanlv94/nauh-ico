import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact_section small_pt">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 pr-0 res_md_pr_15">
              <div className="bg_light_dark_blue contact_box animation" data-animation="fadeInLeft" data-animation-delay="0.1s">
                <div className="title_default_light title_border">
                  <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Contact With Us</h4>
                  <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Our office is located in a beautiful building and garden and fast growing city.</p>
                </div>
                <ul className="list_none contact_info mt-margin">
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                    <i className="ion-ios-location" />
                    <div className="contact_detail"> <span>Address</span>
                      <p>219 Trung Kinh, Cau Giay, Ha Noi, Viet Nam</p>
                    </div>
                  </li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.5s">
                    <i className="ion-android-call" />
                    <div className="contact_detail"> <span>Phone</span>
                      <p>+84 0999 999 999</p>
                    </div>
                  </li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                    <i className="ion-ios-email" />
                    <div className="contact_detail"> <span>Email-id</span>
                      <p>lehuan94cntt@gmail.com</p>
                    </div>
                  </li>
                </ul>
                <div className="contct_follow large_space">
                  <span className="text-uppercase animation" data-animation="fadeInUp" data-animation-delay="0.2s">Follow Us</span>
                  <ul className="list_none social_icon">
                    <li className="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><a href="#"><i className=" fa fa-facebook" /></a></li>
                    <li className="animation" data-animation="fadeInUp" data-animation-delay="0.5s"><a href="#"><i className=" fa fa-twitter" /></a></li>
                    <li className="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="#"><i className=" fa fa-google-plus" /></a></li>
                    <li className="animation" data-animation="fadeInUp" data-animation-delay="0.7s"><a href="#"><i className=" fa fa-pinterest" /></a></li>
                    <li className="animation" data-animation="fadeInUp" data-animation-delay="0.8s"><a href="#"><i className=" fa fa-linkedin" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-0 res_md_pl_15">
              <div className="bg_light_dark contact_box animation" data-animation="fadeInRight" data-animation-delay="0.1s">
                <div className="title_default_light title_border">
                  <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Leave a Message</h4>
                </div>
                <form method="post" name="enq" className="form_field">
                  <div className="row">
                    <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                      <input type="text" required="required" placeholder="Enter Name *" id="first-name" className="form-control" name="name" />
                    </div>
                    <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                      <input type="email" required="required" placeholder="Enter Email *" id="email" className="form-control" name="email" />
                    </div>
                    <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                      <input type="text" required="required" placeholder="Enter Subject" id="subject" className="form-control" name="subject" />
                    </div>
                    <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="1s">
                      <textarea required="required" placeholder="Message *" id="description" className="form-control" name="message" rows={2} defaultValue={""} />
                    </div>
                    <div className="col-md-12 text-center animation" data-animation="fadeInUp" data-animation-delay="1.2s">
                      <button type="submit" title="Submit Your Message!" className="btn btn-default btn-radius" id="submitButton" name="submit" value="Submit">Submit <i className="ion-ios-arrow-thin-right" /></button>
                    </div>
                    <div className="col-md-12">
                      <div id="alert-msg" className="alert-msg text-center" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
