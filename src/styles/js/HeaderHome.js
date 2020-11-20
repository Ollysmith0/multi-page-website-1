const menuActive = () => {
  const menu = document.getElementById("menu");
  const first = document.getElementById("first-bar");
  const second = document.getElementById("second-bar");
  const third = document.getElementById("third-bar");
  const link = document.getElementById("link");
  const link2 = document.getElementById("link2");
  const link3 = document.getElementById("link3");
  const overlay = document.getElementById("overlay-menu-mobile");
  overlay.classList.toggle("overlay-menu-mobile-active");
  menu.classList.toggle("menu-active");
  first.classList.toggle("first-bar-active");
  second.classList.toggle("second-bar-active");
  third.classList.toggle("third-bar-active");
  link.classList.toggle("link-active");
  link2.classList.toggle("link-active");
  link3.classList.toggle("link-active");
};

export default menuActive;
