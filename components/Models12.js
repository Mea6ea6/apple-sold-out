// const ↓
const models12 = document.querySelector(".models__list_xii");
const model12Template = document.querySelector("#model-12-template").content.querySelector(".model");

// function ↓
function createModel12({
  image,
  colors,
  title,
  memory_first,
  price_first,
  memory_second,
  price_second,
}) {
  const models12 = model12Template.cloneNode(true);
  const modelImage = models12.querySelector(".model__image");
  const modelColors = models12.querySelector(".model__colors");
  const modelTitle = models12.querySelector(".model__title");
  const modelMemoryFirst = models12.querySelector(".model__memory_first");
  const modelPriceFirst = models12.querySelector(".model__price_first");
  const modelMemorySecond = models12.querySelector(".model__memory_second");
  const modelPriceSecond = models12.querySelector(".model__price_second");

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

  return models12;
}

function renderModels12(data) {
  models12.append(createModel12(data));
}