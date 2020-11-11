import React, { useEffect } from "react";
import "../contact/Contact.scss";

import Footer from "../home/components/Footer/Footer";

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
        <div className="container-location">
          <div className="canada">
            <div className="flex-box-ca show-on-scroll">
              <img
                src="/assets/images/about/desktop/deal-content-bg.svg"
                alt="deal-content-bg"
                className="content-location-bg"
              />
              <div className="canada-locations">
                <h1 className="canada-title">Canada</h1>
                <div className="canada-address">
                  <div className="canada-office">
                    <p className="title-g">Designo Central Office</p>
                    <p className="phone-g">3886 Wellington Street</p>
                    <p className="mail-g">Toronto, Ontario M9C 3J5</p>
                  </div>
                  <div className="canada-contact">
                    <p className="title-g">Contact</p>
                    <p className="phone-g">P : +1 253-863-8967</p>
                    <p className="mail-g">M : contact@designo.co</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="canada-image show-on-scroll">
              <img
                src="/assets/images/locations/desktop/image-map-canada.png"
                alt="img-canada"
                className="canada-img"
              />
            </div>
          </div>
          <div className="australia">
            <div className="australia-image show-on-scroll">
              <img
                src="/assets/images/locations/desktop/image-map-australia.png"
                alt="img-australia"
                className="australia-img"
              />
            </div>
            <div className="flex-box-us show-on-scroll">
              <img
                src="/assets/images/about/desktop/deal-content-bg.svg"
                alt="deal-content-bg"
                className="content-location-bg"
              />
              <div className="australia-locations">
                <h1 className="australia-title">Australia</h1>
                <div className="australia-address">
                  <div className="australia-office">
                    <p className="title-g">Designo AU Office</p>
                    <p className="phone-g">19 Balonne Street</p>
                    <p className="mail-g">New South Wales 2443</p>
                  </div>
                  <div className="australia-contact">
                    <p className="title-g">Contact</p>
                    <p className="phone-g">P : (02) 6720 9092</p>
                    <p className="mail-g">M : contact@designo.au</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="united-kingdom">
            <div className="flex-box-un show-on-scroll">
              <img
                src="/assets/images/about/desktop/deal-content-bg.svg"
                alt="deal-content-bg"
                className="content-location-bg"
              />
              <div className="united-kingdom-locations">
                <h1 className="united-kingdom-title">United Kingdom</h1>
                <div className="united-kingdom-address">
                  <div className="united-kingdom-office">
                    <p className="title-g">Designo UK Office</p>
                    <p className="phone-g">13 Colorado Way</p>
                    <p className="mail-g">Rhyd-y-fro SA8 9GA</p>
                  </div>
                  <div className="united-kingdom-contact">
                    <p className="title-g">Contact</p>
                    <p className="phone-g">P : 078 3115 1400</p>
                    <p className="mail-g">M : contact@designo.uk</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="united-kingdom-image show-on-scroll">
              <img
                src="/assets/images/locations/desktop/image-map-united-kingdom.png"
                alt="img-united-kingdom"
                className="united-kingdom-img"
              />
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
    </div>
  );
};

export default Location;
