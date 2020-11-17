const inputAnimate = () => {
  const label = document.getElementsByTagName("label");
  for (let item of label) {
    item.classList.add("label-animate");
  }
};

export default inputAnimate;
