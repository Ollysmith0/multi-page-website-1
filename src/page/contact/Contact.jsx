import React, { useEffect } from "react";

import HeaderHome from "../home/components/Header-home/HeaderHome";
import Footer from "../home/components/Footer/Footer";

import "../contact/Contact.scss";

import scrollingDetect from "../../styles/js/scrollingDetect";
import scrollTopButton from "../../styles/js/scrollTopButton";
import topFunction from "../../styles/js/scrollToTop";

import SubscribeForm from "../contact/form/Form";

const Contact = () => {
  useEffect(() => scrollingDetect(), []);
  useEffect(() => scrollTopButton(), []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const banner = document.getElementById("get-in-touch-banner-design");
    const content = document.getElementById("content-f-design");
    content.style.padding = "72px 0";
    banner.style.display = "none";
  });
  console.log(typeof SubscribeForm);
  return (
    <>
      <HeaderHome />
      <body>
        <img
          src="/assets/images/home/desktop/rec-web-design-bg.svg"
          alt="rec-web-design-bg"
          className="rec-web-design-bg2"
        />
        <div className="container-contact">
          <div className="subscribe-section">
            <img
              className="oval-contact-bg show-on-scroll"
              src="/assets/images/contact/desktop/oval-contact-bg.svg"
              alt="oval-contact-bg"
            />
            <div className="left-content">
              <img
                src="/assets/images/contact/mobile/contact-bg-mobile.svg"
                alt="contact-bg-mobile"
                className="contact-bg-mobile"
              />
              <div className="flex-box-contact">
                <div className="content-contact show-on-scroll">
                  <h1 className="title-contact">Contact Us</h1>
                  <p className="para-contact">
                    Ready to take it to the next level? Let’s talk about your
                    project or idea and find out how we can help your business
                    grow. If you are looking for unique digital experiences
                    that’s relatable to your users, drop us a line.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-form show-on-scroll">
              <SubscribeForm />
            </div>
          </div>
          <div className="location-menu">
            <div className="canada show-on-scroll">
              <img
                src="/assets/images/shared/desktop/canada-location.svg"
                alt="canada-icon"
                className="canada-icon"
              />
              <p className="canada-title">canada</p>
              <a href="/#" className="canada-link">
                see location
              </a>
            </div>
            <div className="australia show-on-scroll">
              <img
                src="/assets/images/shared/desktop/australia-location.svg"
                alt="australia-icon"
                className="australia-icon"
              />
              <p className="australia-title">australia</p>
              <a href="/#" className="australia-link">
                see location
              </a>
            </div>
            <div className="united-k show-on-scroll">
              <img
                src="/assets/images/shared/desktop/united-kingdom-location.svg"
                alt="united-kingdom-icon"
                className="united-kingdom-icon"
              />
              <p className="united-kingdom-title">united kingdom</p>
              <a href="/#" className="united-kingdom-link">
                see location
              </a>
            </div>
          </div>
        </div>
      </body>
      <button className="scroll-top" id="scroll-top" onClick={topFunction}>
        <svg
          width="15"
          height="20"
          viewBox="0 0 5 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Path 5"
            d="M1 1L5 5L1 9"
            stroke="#E7816B"
            stroke-width="0"
          />
        </svg>
      </button>
      <Footer />
    </>
  );
};

export default Contact;
