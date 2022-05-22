const images = ["img/bg1.jpg", "img/bg2.jpg", "img/bg3.jpg"];

const choseImg = images[Math.floor(Math.random() * images.length)];
const Img = document.querySelector("#bg");

Img.src = choseImg;
