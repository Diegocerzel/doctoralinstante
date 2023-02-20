$(document).ready(function () {
  /*Mobile Funcitonality on Mobile*/
  function menuMobileFunctionatlity() {
    $(".hamburger-wrapper").click(function () {
      $(".hamburger-wrapper").toggleClass("menu-on");
      $(".links-wrapper").toggleClass("links-show");
      $("body").toggleClass("non-scroll");
    });
  }

  /*Calculate vh on moible devices*/
  function calculateVh() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", vh + "px");
    console.log("calculamos wHeigbht: " + vh);
  }

  /*Call functions*/
  calculateVh();
  menuMobileFunctionatlity();
  window.addEventListener("resize", calculateVh);
  window.addEventListener("orientationchange", calculateVh);
});
