import React, { useEffect } from "react";
import "../locations/Location.scss";

import Footer from "../home/components/Footer/Footer";
import SubscribeForm from "../contact/form/Form";

import scrollingDetect from "../../styles/js/scrollingDetect";
import scrollTopButton from "../../styles/js/scrollTopButton";
import topFunction from "../../styles/js/scrollToTop";

const Location = () => {
  useEffect(() => scrollingDetect(), []);
  useEffect(() => scrollTopButton(), []);
  return (
    <div>
      <header>
        <div className="container">
          <div className="content">
            <div className="logo show-on-scroll">
              <img
                src="/assets/images/home/desktop/Oval.svg"
                alt="Oval-logo"
                className="oval"
              ></img>
              <img
                src="/assets/images/home/desktop/DESIGNO.svg"
                alt="DESIGNO-logo"
                className="designo"
              ></img>
            </div>
            <ul className="menu show-on-scroll">
              <li className="item">
                <a href="/#" className="link">
                  our company
                </a>
              </li>
              <li className="item">
                <a href="/#" className="link">
                  locations
                </a>
              </li>
              <li className="item">
                <a href="/#" className="link">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <body>
        <div className="container-contact">
          <div className="subscribe-section">
            <img
              className="oval-contact-bg"
              src="/assets/images/contact/desktop/oval-contact-bg.svg"
              alt="oval-contact-bg"
            />
            <div className="left-content">
              <div className="flex-box-contact">
                <div className="content-contact">
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
            <div className="right-form">
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
      {/* <Footer /> */}
    </div>
  );
};

export default Location;
