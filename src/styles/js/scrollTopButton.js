const scrollTop = () => {
  //Get the button:
  const mybutton = document.getElementById("scroll-top");

  // When the user scrolls down 100px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
};

export default scrollTop;
