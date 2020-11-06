import React from "react";
import { NavLink } from "react-router-dom";

import Card from "../Content/Card/Card";
import "../Content/Content.scss";

const Content = (props) => {
  return (
    <>
      <div className="card-layout" id="card-layout">
        {props.contentSource.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
      <div className="container-app-design-categories">
        <div className="left-design">
          <div className="app-design">
            <div className="content-d">
              <h1 className="title-d">
                {props.contentSource.map((item) => item.titleD1)}
              </h1>
              <NavLink
                to={`http://localhost:3000/${props.contentSource.map(
                  (item) => item.navURL1
                )}`}
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
        </div>
        <div className="right-design">
          <div className="graphic-design">
            <div className="content-d">
              <h1 className="title-d">
                {props.contentSource.map((item) => item.titleD2)}
              </h1>
              <NavLink
                to={`http://localhost:3000/${props.contentSource.map(
                  (item) => item.navURL2
                )}`}
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
        </div>
      </div>
    </>
  );
};

export default Content;
