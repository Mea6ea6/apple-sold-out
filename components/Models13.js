// const ↓
const models13 = document.querySelector(".models__list_xiii");
const model13Template = document.querySelector("#model-13-template").content.querySelector(".model");

// function ↓
function createModel13({
  image,
  colors,
  title,
  memory_first,
  price_first,
  memory_second,
  price_second,
}) {
  const models13 = model13Template.cloneNode(true);
  const modelImage = models13.querySelector(".model__image");
  const modelColors = models13.querySelector(".model__colors");
  const modelTitle = models13.querySelector(".model__title");
  const modelMemoryFirst = models13.querySelector(".model__memory_first");
  const modelPriceFirst = models13.querySelector(".model__price_first");
  const modelMemorySecond = models13.querySelector(".model__memory_second");
  const modelPriceSecond = models13.querySelector(".model__price_second");

  modelImage.setAttribute("src", image);
  colors.forEach((color) => {
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("model__color");
    colorDiv.style.backgroundColor = color;
    modelColors.appendChild(colorDiv);
  });
  modelTitle.textContent = title;
  modelMemoryFirst.textContent = memory_first;
  modelPriceFirst.textContent = price_first;
  modelMemorySecond.textContent = memory_second;
  modelPriceSecond.textContent = price_second;

  return models13;
}

function renderModels13(data) {
  models13.append(createModel13(data));
}