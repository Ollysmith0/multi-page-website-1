import React, { useEffect } from "react";
import "../Card/Card.scss";

import scrollingDetect from "../../../../../styles/js/scrollingDetect";
import scrollTopButton from "../../../../../styles/js/scrollTopButton";

const Card = (props) => {
  useEffect(() => scrollingDetect(), []);
  useEffect(() => scrollTopButton(), []);
  const { imageURL, imageAlt, imageClass, title, para } = props.item;
  console.log(typeof i);
  return (
    <div>
      <div className="card show-on-scroll">
        <div className="card-bg">
          <img src={imageURL} alt={imageAlt} className={imageClass}></img>
        </div>
        <div className="content-card">
          <div className="content-wrapper-card">
            <h1 className="title-card">{title}</h1>
            <p className="para-card">{para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
