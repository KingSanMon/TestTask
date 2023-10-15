/** @format */

const navbar = document.querySelector('#navbar');
const navbutton = document.querySelector('#burger');
const navImg = document.querySelector('#image-burger');

navbutton.onclick = () => {
  if (navbar.classList.toggle('open')) {
    navImg.src = 'public/image/close.png';
  } else {
    navImg.src = 'public/image/open.png';
  }
};
