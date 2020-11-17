import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../about/About.scss";

import Footer from "../home/components/Footer/Footer";

import scrollingDetect from "../../styles/js/scrollingDetect";
import scrollTopButton from "../../styles/js/scrollTopButton";
import topFunction from "../../styles/js/scrollToTop";

const About = () => {
  useEffect(() => scrollingDetect(), []);
  useEffect(() => scrollTopButton(), []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <NavLink to="/About" className="link">
                  our company
                </NavLink>
              </li>
              <li className="item">
                <NavLink to="/Location" className="link">
                  locations
                </NavLink>
              </li>
              <li className="item">
                <NavLink to="/Contact" className="link">
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <body>
        <div className="container-about">
          <div className="about-content">
            <div className="flex-box-a show-on-scroll">
              <div className="content-a">
                <h1 className="title-a">About Us</h1>
                <p className="para-a">
                  Founded in 2010, we are a creative agency that produces
                  lasting results for our clients. We’ve partnered with many
                  startups, corporations, and nonprofits alike to craft designs
                  that make real impact. We’re always looking forward to
                  creating brands, products, and digital experiences that
                  connect with our clients’ audiences.
                </p>
              </div>
              <img
                src="/assets/images/about/desktop/Oval-about-page.svg"
                alt="Oval"
                className="oval-about"
              />
            </div>
            <div className="image-a show-on-scroll">
              <img
                src="/assets/images/about/desktop/image-about-hero.jpg"
                alt="img-about-hero"
                className="img-a"
              />
              <img
                src="/assets/images/about/tablet/image-about-hero.jpg"
                alt="img-about-hero-tablet"
                className="img-a-tablet"
              />
            </div>
          </div>
          <div className="qualify-talent">
            <div className="image-q show-on-scroll">
              <img
                src="/assets/images/about/desktop/image-world-class-talent.jpg"
                alt="img-world-class"
                className="img-q"
              />
              <img
                src="/assets/images/about/tablet/image-world-class-talent.jpg"
                alt="img-world-class"
                className="img-tablet-q"
              />
            </div>
            <div className="flex-box-q show-on-scroll">
              <div className="content-q">
                <h1 className="title-q">World-class talent</h1>
                <p className="para-q">
                  We are a crew of strategists, problem-solvers, and
                  technologists. Every design is thoughtfully crafted from
                  concept to launch, ensuring success in its given market. We
                  are constantly updating our skills in a myriad of platforms.
                </p>
                <br />
                <p className="para-q">
                  Our team is multi-disciplinary and we are not merely
                  interested in form — content and meaning are just as
                  important. We give great importance to craftsmanship, service,
                  and prompt delivery. Clients have always been impressed with
                  our high-quality outcomes that encapsulates their brand’s
                  story and mission.
                </p>
              </div>
              <img
                src="/assets/images/about/desktop/talent-bg.svg"
                alt="talent-svg"
                className="oval-qualify"
              />
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
          <div className="real-deal">
            <div className="flex-box-r show-on-scroll">
              <div className="content-r">
                <h1 className="title-r">The real deal</h1>
                <p className="para-r">
                  As strategic partners in our clients’ businesses, we are ready
                  to take on any challenge as our own. Solving real problems
                  require empathy and collaboration, and we strive to bring a
                  fresh perspective to every opportunity.We make design and
                  technology more accessible and give you tools to measure
                  success.
                </p>
                <p className="para-r line2">
                  We are visual storytellers in appealing and captivating ways.
                  By combining business and marketing strategies, we inspire
                  audiences to take action and drive real results.
                </p>
              </div>
            </div>
            <div className="image-r show-on-scroll">
              <img
                src="/assets/images/about/desktop/image-real-deal.jpg"
                alt="real-deal-img"
                className="img-r"
              />
              <img
                src="/assets/images/about/tablet/image-real-deal.jpg"
                alt="real-deal-img"
                className="img-r-tablet"
              />
            </div>
          </div>
        </div>
        <img
          src="/assets/images/home/desktop/rec-web-design-bg.svg"
          alt="rec-web-design-bg"
          className="rec-about1"
        />
        <img
          src="/assets/images/home/desktop/rec-web-design-bg.svg"
          alt="rec-web-design-bg"
          className="rec-about2"
        />
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

export default About;
