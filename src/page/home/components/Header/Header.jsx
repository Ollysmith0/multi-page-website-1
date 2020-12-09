import React, { useEffect } from "react";

import scrollingDetect from "../../../../styles/js/scrollingDetect";
import HeaderHome from "../Header-home/HeaderHome";

const Header = (props) => {
  useEffect(() => scrollingDetect(), []);
  return props.headerSource.map((item) => (
    <>
      <div className="header">
        <div className="container-design">
          <HeaderHome />
          <div className="banner-design show-on-scroll">
            <img
              src="/assets/images/web-design/desktop/mobile-bg.svg"
              alt="mobile-bg"
              className="mobile-bg"
            />
            <img
              src="/assets/images/web-design/desktop/banner-bg-tablet.svg"
              alt="banner-bg"
              className="banner-tablet-bg-design"
              id="banner-bg"
            />
            <div className="content-b-design">
              <h1 className="title-b-design">{item.titleB}</h1>
              <para className="para-b-design">{item.paraB}</para>
            </div>
          </div>
        </div>
        <img src={item.recURL} alt="rec-bg" className="rec-bg-design" />
      </div>
      <img
        src={item.bannerURL}
        alt="banner-bg"
        className="banner-bg-design"
        id="banner-bg"
      />
    </>
  ));
};

export default Header;
