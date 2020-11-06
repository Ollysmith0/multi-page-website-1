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
    titleB: "App design",
    paraB:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    bannerURL: "/assets/images/home/desktop/banner-bg-app-design.svg",
    recURL: "/assets/images/home/desktop/rec-web-design-bg.svg",
    left: 0,
  },
];

const contentSource = [
  {
    imageURL: "/assets/images/app-design/desktop/image-airfilter.jpg",
    imageAlt: "image-airfilter",
    imageClass: "img-airfilter",
    title: "airfilter",
    para: "Solving the problem of poor indoor air quality by filtering the air",
    titleD1: "web design",
    titleD2: "graphic design",
    navURL1: "/Webdesign",
    navURL2: "/Graphicdesign",
  },
  {
    imageURL: "/assets/images/app-design/desktop/image-eyecam.jpg",
    imageAlt: "image-eyecam",
    imageClass: "img-eyecam",
    title: "eyecam",
    para:
      "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    imageURL: "/assets/images/app-design/desktop/image-faceit.jpg",
    imageAlt: "image-faceit",
    imageClass: "img-faceit",
    title: "faceit",
    para: "Get to meet your favorite internet superstar with the faceit app",
  },
  {
    imageURL: "/assets/images/app-design/desktop/image-todo.jpg",
    imageAlt: "image-todo",
    imageClass: "img-todo",
    title: "todo",
    para: "A todo app that features cloud sync with light and dark mode",
  },
  {
    imageURL: "/assets/images/app-design/desktop/image-loopstudios.jpg",
    imageAlt: "image-loopstudios",
    imageClass: "img-loopstudios",
    title: "loopstudios",
    para: "A VR experience app made for Loopstudios",
  },
];

const Appdesign = () => {
  useEffect(() => (document.getElementById("banner-bg").style.left = "0"), []);
  return (
    <div>
      <Header headerSource={headerSource} />
      <Content contentSource={contentSource} />
      <Footer />
    </div>
  );
};

export default Appdesign;
