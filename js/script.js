function changeFirst() {
  document.getElementById("dot").style.backgroundImage =
    "url(./images/main-background.jpg)";
}
function changeSecond() {
  document.getElementById("dot").style.backgroundImage =
    "url(./images/background1.jpg)";
}
function changeThird() {
  document.getElementById("dot").style.backgroundImage =
    "url(./images/background2.jpg)";
}
function changeFourth() {
  document.getElementById("dot").style.backgroundImage =
    "url(./images/background3.jpg)";
}
function changeFifth() {
  document.getElementById("dot").style.backgroundImage =
    "url(./images/background4.jpg)";
}
function changeImgMain() {
  document.getElementById("main").src = "./images/gallery1.png";
}
function changeImg1() {
  document.getElementById("main").src = "./images/gallery2.png";
}
function changeImg2() {
  document.getElementById("main").src = "./images/gallery3.png";
}
function changeImg3() {
  document.getElementById("main").src = "./images/gallery4.png";
}

function changeImg4() {
  document.getElementById("main").src = "./images/gallery5.png";
}

let links = document.getElementById("container__links");
let menu = document.getElementById("container__menu");
menu.addEventListener("click", function () {
  links.classList.toggle("show__menu");
});

$("#menu li a").click(function () {
  $(this).parent().addClass("selected").siblings().removeClass("selected");
});

$(".news__slider").slick({
  dots: true,
  variableWidth: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1174,
      settings: "unslick",
    },
  ],
});
