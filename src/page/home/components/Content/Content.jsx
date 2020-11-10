import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import Card from "../Content/Card/Card";
import "../Content/Content.scss";

import topFunction from "../../../../styles/js/scrollToTop";
import scrollingDetect from "../../../../styles/js/scrollingDetect";
import scrollTopButton from "../../../../styles/js/scrollTopButton";

const Content = (props) => {
  useEffect(() => scrollingDetect(), []);
  useEffect(() => scrollTopButton(), []);
  return (
    <>
      <div className="card-layout" id="card-layout">
        {props.contentSource.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
      <div className="container-app-design-categories">
        <div className="left-design show-on-scroll">
          <NavLink
            to={`${props.contentSource[0].navURL1}`}
            className="second-title"
          >
            <div className="app-design">
              <div className="content-d">
                <h1 className="title-d">
                  {props.contentSource.map((item) => item.titleD1)}
                </h1>
                <NavLink
                  to={`${props.contentSource[0].navURL1}`}
                  className="second-title"
                >
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
        <div className="right-design show-on-scroll">
          <NavLink
            to={`${props.contentSource[0].navURL2}`}
            className="second-title"
          >
            <div className="graphic-design show-on-scroll">
              <div className="content-d">
                <h1 className="title-d">
                  {props.contentSource.map((item) => item.titleD2)}
                </h1>
                <NavLink
                  to={`${props.contentSource[0].navURL2}`}
                  className="second-title"
                >
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
    </>
  );
};

export default Content;
