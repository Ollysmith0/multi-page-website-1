import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../Header-home/HeaderHome.scss";

import menuActive from "../../../../styles/js/HeaderHome";

import scrollingDetect from "../../../../styles/js/scrollingDetect";
import scrollTopButton from "../../../../styles/js/scrollTopButton";

const HeaderHome = () => {
  useEffect(() => scrollingDetect(), []);
  useEffect(() => scrollTopButton(), []);
  return (
    <header>
      <div className="overlay-menu-mobile" id="overlay-menu-mobile"></div>
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
          <ul className="menu show-on-scroll" id="menu">
            <li className="item">
              <NavLink to="/About" className="link" id="link">
                our company
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/Location" className="link" id="link2">
                locations
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/Contact" className="link" id="link3">
                contact
              </NavLink>
            </li>
          </ul>
          <div
            className="menu-mobile show-on-scroll"
            id="menu-mobile"
            onClick={menuActive}
          >
            <span className="first-bar" id="first-bar"></span>
            <span className="second-bar" id="second-bar"></span>
            <span className="third-bar" id="third-bar"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
