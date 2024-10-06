// const ↓
const models11 = document.querySelector(".models__list_xi");
const model11Template = document.querySelector("#model-11-template").content.querySelector(".model");

// function ↓
function createModel11({
  image,
  colors,
  title,
  memory_first,
  price_first,
  memory_second,
  price_second,
}) {
  const models11 = model11Template.cloneNode(true);
  const modelImage = models11.querySelector(".model__image");
  const modelColors = models11.querySelector(".model__colors");
  const modelTitle = models11.querySelector(".model__title");
  const modelMemoryFirst = models11.querySelector(".model__memory_first");
  const modelPriceFirst = models11.querySelector(".model__price_first");
  const modelMemorySecond = models11.querySelector(".model__memory_second");
  const modelPriceSecond = models11.querySelector(".model__price_second");

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

  return models11;
}

function renderModels11(data) {
  models11.append(createModel11(data));
}