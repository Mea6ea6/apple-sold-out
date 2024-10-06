// const ↓
const models15 = document.querySelector(".models__list_xv");
const model15Template = document.querySelector("#model-15-template").content.querySelector(".model");

// function ↓
function createModel15({
  image,
  colors,
  title,
  memory_first,
  price_first,
  memory_second,
  price_second,
}) {
  const models15 = model15Template.cloneNode(true);
  const modelImage = models15.querySelector(".model__image");
  const modelColors = models15.querySelector(".model__colors");
  const modelTitle = models15.querySelector(".model__title");
  const modelMemoryFirst = models15.querySelector(".model__memory_first");
  const modelPriceFirst = models15.querySelector(".model__price_first");
  const modelMemorySecond = models15.querySelector(".model__memory_second");
  const modelPriceSecond = models15.querySelector(".model__price_second");

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

  return models15;
}

function renderModels15(data) {
  models15.append(createModel15(data));
}