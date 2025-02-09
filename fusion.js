const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");

menuBar.addEventListener("click", function () {
  menuNav.classList.toggle("menu-active");
});

const boxDivisi = document.querySelector(".boxDivisi");
const scrollRight = document.querySelector(".bLeft");
const scrollLeft = document.querySelector(".bRight");
const boxKarya = document.querySelector(".boxKarya");
const scrollRightt = document.querySelector(".bLeftt");
const scrollLeftt = document.querySelector(".bRightt");
scrollLeft.addEventListener("click", function (e) {
  var cardWidth = document.querySelector(".boxDivisi .card").offsetWidth;
  boxDivisi.scrollLeft += cardWidth + 24;
});
scrollRight.addEventListener("click", function (e) {
  var cardWidth = document.querySelector(".boxDivisi .card").offsetWidth;
  boxDivisi.scrollLeft -= cardWidth + 24;
});

scrollLeftt.addEventListener("click", function (e) {
  var cardWidth = document.querySelector(".boxDivisi .card").offsetWidth;
  boxKarya.scrollLeft += cardWidth + 56;
});
scrollRightt.addEventListener("click", function (e) {
  var cardWidth = document.querySelector(".boxDivisi .card").offsetWidth;
  boxKarya.scrollLeft -= cardWidth + 56;
});

// Detect scroll and change navbar background
window.addEventListener("scroll", function () {
  const navigation = document.querySelector(".navigation");
  if (window.scrollY > 0) {
    navigation.classList.add("scrolled");
  } else {
    navigation.classList.remove("scrolled");
  }
});
