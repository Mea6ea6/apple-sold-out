const openButton = document.querySelector(".burger");
const closeButton = document.querySelector(".burger__close-btn");
const burgerMenu = document.querySelector(".burger__menu");
const burgerLinks = burgerMenu.querySelectorAll(".nav-link");

openButton.addEventListener("click", () => {
  burgerMenu.classList.add("burger__menu_open");
});
closeButton.addEventListener("click", () => {
  burgerMenu.classList.remove("burger__menu_open");
});
burgerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("burger__menu_open");
  });
});