import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";

import "../components/Header/Header.scss";
import "../components/Content/Content.scss";
import "../components/Footer/Footer.scss";

const headerSource = [
  {
    titleB: "Graphic Design",
    paraB:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    bannerURL: "/assets/images/home/desktop/banner-bg-graphic-design.svg",
    recURL: "/assets/images/home/desktop/rec-web-design-bg.svg",
    left: 0,
  },
];

const contentSource = [
  {
    imageURL: "/assets/images/graphic-design/desktop/image-change.jpg",
    imageAlt: "image-change",
    imageClass: "img-change",
    title: "TIM BROWN",
    para: "A book cover designed for Tim Brown’s new release, ‘Change’",
    titleD1: "App design",
    titleD2: "Web design",
    navURL1: "/Appdesign",
    navURL2: "/Webdesign",
  },
  {
    imageURL: "/assets/images/graphic-design/desktop/image-boxed-water.jpg",
    imageAlt: "image-boxed-water",
    imageClass: "img-boxed-water",
    title: "BOXED WATER",
    para: "A simple packaging concept made for Boxed Water",
  },
  {
    imageURL: "/assets/images/graphic-design/desktop/image-science.jpg",
    imageAlt: "image-science",
    imageClass: "img-science",
    title: "SCIENCE!",
    para: "A poster made in collaboration with the Federal Art Project",
  },
];

const Graphicdesign = () => {
  useEffect(() => {
    document.getElementById("banner-bg").style.left = "0";
    document.getElementById("card-layout").style.height = "333px";
  }, []);
  return (
    <div>
      <Header headerSource={headerSource} />
      <Content contentSource={contentSource} />
      <Footer />
    </div>
  );
};

export default Graphicdesign;
