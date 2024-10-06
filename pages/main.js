// Tabs
const tabs = document.querySelectorAll(".models__button");
const contents = document.querySelectorAll(".models__list");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("models__button-active");
    });
    contents.forEach((content) => {
      content.classList.remove("models__list-active");
    });
    tabs[index].classList.add("models__button-active");
    contents[index].classList.add("models__list-active");
    
  });
});

// Models
initialIPhones15.forEach(function (item) {
  renderModels15(item);
});
initialIPhones14.forEach(function (item) {
  renderModels14(item);
});
initialIPhones13.forEach(function (item) {
  renderModels13(item);
});
initialIPhones12.forEach(function (item) {
  renderModels12(item);
});
initialIPhones11.forEach(function (item) {
  renderModels11(item);
});
initialIPhones10.forEach(function (item) {
  renderModels10(item);
});

// Slider
const sliderWrapper = document.querySelector(".faq__items");
const slides = document.querySelectorAll(".faq__item");
const leftArrow = document.querySelector(".faq__button-left");
const rightArrow = document.querySelector(".faq__button-right");

let currentSlide = 0;
const totalSlides = slides.length;

function updateSliderPosition() {
  const newTranslateValue = -(390 * currentSlide);
  sliderWrapper.style.transform = `translateX(${newTranslateValue}px)`;
}
leftArrow.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSliderPosition();
  }
});
rightArrow.addEventListener("click", () => {
  if (currentSlide < totalSlides - 3) {
    currentSlide++;
    updateSliderPosition();
  }
});