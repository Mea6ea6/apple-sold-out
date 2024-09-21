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
