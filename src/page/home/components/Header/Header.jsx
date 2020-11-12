import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import scrollingDetect from "../../../../styles/js/scrollingDetect";

const Header = (props) => {
  useEffect(() => scrollingDetect(), []);
  return props.headerSource.map((item) => (
    <>
      <div className="header">
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
          <div className="banner show-on-scroll">
            <div className="content-b">
              <h1 className="title-b">{item.titleB}</h1>
              <para className="para-b">{item.paraB}</para>
            </div>
          </div>
        </div>
        <img src={item.recURL} alt="rec-bg" className="rec-bg" />
      </div>
      <img
        src={item.bannerURL}
        alt="banner-bg"
        className="banner-bg"
        id="banner-bg"
      />
    </>
  ));
};

export default Header;
