// const ↓
const models14 = document.querySelector(".models__list_xiv");
const model14Template = document.querySelector("#model-14-template").content.querySelector(".model");

// function ↓
function createModel14({
  image,
  colors,
  title,
  memory_first,
  price_first,
  memory_second,
  price_second,
}) {
  const models14 = model14Template.cloneNode(true);
  const modelImage = models14.querySelector(".model__image");
  const modelColors = models14.querySelector(".model__colors");
  const modelTitle = models14.querySelector(".model__title");
  const modelMemoryFirst = models14.querySelector(".model__memory_first");
  const modelPriceFirst = models14.querySelector(".model__price_first");
  const modelMemorySecond = models14.querySelector(".model__memory_second");
  const modelPriceSecond = models14.querySelector(".model__price_second");

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

  return models14;
}

function renderModels14(data) {
  models14.append(createModel14(data));
}