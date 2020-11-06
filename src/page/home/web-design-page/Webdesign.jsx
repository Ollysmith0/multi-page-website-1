import React from "react";
import { NavLink } from "react-router-dom";

import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";

import "../components/Header/Header.scss";
import "../components/Content/Content.scss";
import "../components/Footer/Footer.scss";

const headerSource = [
  {
    titleB: "Web design",
    paraB:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    bannerURL: "/assets/images/home/desktop/banner-bg-web-design.svg",
    recURL: "/assets/images/home/desktop/rec-web-design-bg.svg",
    left: "0",
  },
];

const contentSource = [
  {
    imageURL: "/assets/images/web-design/desktop/image-express.jpg",
    imageAlt: "image-express",
    imageClass: "img-express",
    title: "express",
    para: "A multi-carrier shipping appsite for ecommerce businesses",
    titleD1: "app design",
    titleD2: "graphic design",
    navURL1: "/Appdesign",
    navURL2: "/Graphicdesign",
  },
  {
    imageURL: "/assets/images/web-design/desktop/image-transfer.jpg",
    imageAlt: "image-transfer",
    imageClass: "img-transfer",
    title: "transfer",
    para: "Site for low-cost money transfers and sending money within seconds",
  },
  {
    imageURL: "/assets/images/web-design/desktop/image-photon.jpg",
    imageAlt: "image-photon",
    imageClass: "img-photon",
    title: "photon",
    para:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    imageURL: "/assets/images/web-design/desktop/image-builder.jpg",
    imageAlt: "image-builder",
    imageClass: "img-builder",
    title: "builder",
    para: "Connects users with local contractors based on their location",
  },
  {
    imageURL: "/assets/images/web-design/desktop/image-blogr.jpg",
    imageAlt: "image-blogr",
    imageClass: "img-blogr",
    title: "BLOGR",
    para: "Blogr is a platform for creating an online blog or publication",
  },
  {
    imageURL: "/assets/images/web-design/desktop/image-camp.jpg",
    imageAlt: "image-camp",
    imageClass: "img-camp",
    title: "camp",
    para: "Get expert training in coding, data, design, and digital marketing",
  },
];

const Webdesign = () => {
  return (
    <div>
      <Header headerSource={headerSource} />
      <Content contentSource={contentSource} />
      <Footer />
    </div>
  );
};

export default Webdesign;
