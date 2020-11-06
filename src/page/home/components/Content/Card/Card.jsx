import React from "react";
import "../Card/Card.scss";

const Card = (props) => {
  const { imageURL, imageAlt, imageClass, title, para } = props.item;
  return (
    <div>
      <div className="card">
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
