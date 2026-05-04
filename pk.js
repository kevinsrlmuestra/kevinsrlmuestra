var isMobile = window.matchMedia("(max-width: 600px)").matches;

/*Animacion del cambio de imagen*/
var slides = document.querySelectorAll("#slider div");
var index = 0;
var interval;

function showSlide(i) {
  slides.forEach(function (slide, j) {
    slide.classList.toggle("active", j === i);
  });
}
function next() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

showSlide(index);

interval = setInterval(next, 5000);

if (!isMobile) {
  var slider = document.getElementById("slider");
  if (slider) {
    slider.onpointerdown = function () {
      clearInterval(interval);
    };
    slider.onpointerup = function () {
      interval = setInterval(next, 5000);
    };
  }
}

/*menu hamburguesa*/
var toggle = document.querySelector(".menuToggle");
var menu = document.querySelector(".buttonContainer");

toggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});
