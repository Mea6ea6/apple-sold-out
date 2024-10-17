const sliderWrapper = document.querySelector(".faq__items");
const slides = document.querySelectorAll(".faq__item");
const leftArrow = document.querySelector(".faq__button-left");
const rightArrow = document.querySelector(".faq__button-right");
const totalSlides = slides.length;
let currentSlide = 0;

function getMaxVisibleSlides() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1180) return 3;
  else if (screenWidth > 780) return 2;
  else return 1;
}
function updateSliderPosition() {
  const newTranslateValue = -(390 * currentSlide);
  sliderWrapper.style.transform = `translateX(${newTranslateValue}px)`;
  updateArrows();
}
function updateArrows() {
  leftArrow.classList.toggle("faq__button_disabled", currentSlide === 0);
  rightArrow.classList.toggle(
    "faq__button_disabled",
    currentSlide >= totalSlides - getMaxVisibleSlides()
  );
}

leftArrow.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSliderPosition();
  }
});
rightArrow.addEventListener("click", () => {
  if (currentSlide < totalSlides - getMaxVisibleSlides()) {
    currentSlide++;
    updateSliderPosition();
  }
});

window.addEventListener("resize", updateArrows);
updateArrows();