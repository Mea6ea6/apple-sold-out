// const ↓
const models10 = document.querySelector(".models__list_x");
const model10Template = document.querySelector("#model-11-template").content.querySelector(".model");

// function ↓
function createModel10({
  image,
  colors,
  title,
  memory_first,
  price_first,
  memory_second,
  price_second,
}) {
  const models10 = model10Template.cloneNode(true);
  const modelImage = models10.querySelector(".model__image");
  const modelColors = models10.querySelector(".model__color");
  const modelTitle = models10.querySelector(".model__title");
  const modelMemoryFirst = models10.querySelector(".model__memory_first");
  const modelPriceFirst = models10.querySelector(".model__price_first");
  const modelMemorySecond = models10.querySelector(".model__memory_second");
  const modelPriceSecond = models10.querySelector(".model__price_second");

  modelImage.setAttribute("src", image);
  modelColors.style.backgroundColor = colors;
  modelTitle.textContent = title;
  modelMemoryFirst.textContent = memory_first;
  modelPriceFirst.textContent = price_first;
  modelMemorySecond.textContent = memory_second;
  modelPriceSecond.textContent = price_second;

  return model;
}

function renderModels10(data) {
  models10.append(createModel10(data));
}