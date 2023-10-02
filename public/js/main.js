/** @format */

const navbar = document.querySelector("#navbar");
const navbutton = document.querySelector("#nav-button");
const navImg = document.querySelector("#button-open");

navbutton.onclick = () => {
  if (navbar.classList.toggle("open")) {
    navImg.src = "public/image/close.png";
  } else {
    navImg.src = "public/image/open.png";
  }
};
