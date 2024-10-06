// const ↓
const tabs = document.querySelectorAll(".models__button");
const contents = document.querySelectorAll(".models__list");

// function ↓
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