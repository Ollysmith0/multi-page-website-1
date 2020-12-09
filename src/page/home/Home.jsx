import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import HeaderHome from "../home/components/Header-home/HeaderHome";
import Footer from "../home/components/Footer/Footer";

import "../home/Home.scss";

import scrollingDetect from "../../styles/js/scrollingDetect";
import scrollTopButton from "../../styles/js/scrollTopButton";
import topFunction from "../../styles/js/scrollToTop";

const Home = () => {
  useEffect(() => scrollingDetect(), []);
  useEffect(() => scrollTopButton(), []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderHome />
      <body>
        <div className="overlay-menu-mobile" id="overlay-menu-mobile"></div>
        <div className="container-banner show-on-scroll">
          <div className="patch1"></div>
          <img
            src="/assets/images/home/tablet/oval-tablet-bg.svg"
            alt="bg-pattern-hero-home"
            className="tablet-bg-pattern"
          />
          <div className="banner-content">
            <h1 className="title">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="para">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <button className="learn-more">learn more</button>
          </div>
          <div className="img-phone">
            <img
              src="/assets/images/home/desktop/phone-design.svg"
              alt="phone-design"
            />
          </div>
        </div>
        <div className="container-design-categories">
          <NavLink to="/Webdesign" className="second-title">
            <div className="web-design show-on-scroll">
              <div className="content-d">
                <h1 className="title-d">web design</h1>
                <NavLink to="/Graphicdesign" className="second-title">
                  view projects
                </NavLink>
                <img
                  src="/assets/images/home/desktop/next-arrow.svg"
                  alt="next-arrow"
                  className="next-arrow"
                />
              </div>
              <div className="overlay"></div>
            </div>
          </NavLink>
          <div className="right-content">
            <NavLink to="/Appdesign" className="second-title">
              <div className="app-design show-on-scroll">
                <div className="content-d">
                  <h1 className="title-d">app design</h1>
                  <NavLink to="/Graphicdesign" className="second-title">
                    view projects
                  </NavLink>
                  <img
                    src="/assets/images/home/desktop/next-arrow.svg"
                    alt="next-arrow"
                    className="next-arrow"
                  />
                </div>
                <div className="overlay"></div>
              </div>
            </NavLink>
            <NavLink to="/Graphicdesign" className="second-title">
              <div className="graphic-design show-on-scroll">
                <div className="content-d">
                  <h1 className="title-d">graphic design</h1>
                  <NavLink to="/Graphicdesign" className="second-title">
                    view projects
                  </NavLink>
                  <img
                    src="/assets/images/home/desktop/next-arrow.svg"
                    alt="next-arrow"
                    className="next-arrow"
                  />
                </div>
                <div className="overlay"></div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="container-concepts">
          <div className="concepts">
            <div className="passionate show-on-scroll">
              <div className="content-c">
                <div className="icon-c">
                  <img
                    src="/assets/images/home/desktop/illustration-passionate.svg"
                    alt="passionate"
                    className="passionate-img"
                  />
                  <img
                    src="/assets/images/home/desktop/oval-white.svg"
                    alt="oval-white"
                    className="oval-white"
                  />
                </div>
                <div className="right-c">
                  <h1 className="title-c">PASSIONATE</h1>
                  <p className="para-c">
                    Each project starts with an in-depth brand research to
                    ensure we only create products that serve a purpose. We
                    merge art, design, and technology into exciting new
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="resourceful show-on-scroll">
              <div className="content-c">
                <div className="icon-c">
                  <img
                    src="/assets/images/home/desktop/illustration-resourceful.svg"
                    alt="resourceful"
                    className="resourceful-img"
                  />
                  <img
                    src="/assets/images/home/desktop/oval-white-2.svg"
                    alt="oval-white"
                    className="oval-white"
                  />
                </div>
                <div className="right-c">
                  <h1 className="title-c">RESOURCEFUL</h1>
                  <p className="para-c">
                    Everything that we do has a strategic purpose. We use an
                    agile approach in all of our projects and value customer
                    collaboration. It guarantees superior results that fulfill
                    our clients’ needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="friendly show-on-scroll">
              <div className="content-c">
                <div className="icon-c">
                  <img
                    src="/assets/images/home/desktop/illustration-friendly.svg"
                    alt="friendly"
                    className="friendly-img"
                  />
                  <img
                    src="/assets/images/home/desktop/oval-white-3.svg"
                    alt="oval-white"
                    className="oval-white"
                  />
                </div>
                <div className="right-c">
                  <h1 className="title-c">FRIENDLY</h1>
                  <p className="para-c">
                    We are a group of enthusiastic folks who know how to put
                    people first. Our success depends on our customers, and we
                    strive to give them the best experience a company can
                    provide.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/assets/images/home/desktop/rectangle.svg"
            alt="rectangle"
            className="rectangle"
          />
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

export default Home;
