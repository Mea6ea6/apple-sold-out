// const ↓
const models16 = document.querySelector(".models__list_xvi");
const model16Template = document.querySelector("#model-16-template").content.querySelector(".model");

// function ↓
function createModel16({
  image,
  colors,
  title,
  memory_first,
  price_first,
  memory_second,
  price_second,
}) {
  const models16 = model16Template.cloneNode(true);
  const modelImage = models16.querySelector(".model__image");
  const modelColors = models16.querySelector(".model__colors");
  const modelTitle = models16.querySelector(".model__title");
  const modelMemoryFirst = models16.querySelector(".model__memory_first");
  const modelPriceFirst = models16.querySelector(".model__price_first");
  const modelMemorySecond = models16.querySelector(".model__memory_second");
  const modelPriceSecond = models16.querySelector(".model__price_second");

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

  return models16;
}

function renderModels16(data) {
  models16.append(createModel16(data));
}