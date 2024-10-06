// const ↓
const models15 = document.querySelector(".models__list_xv");
const models14 = document.querySelector(".models__list_xiv");
const models13 = document.querySelector(".models__list_xiii");
const models12 = document.querySelector(".models__list_xii");
const models11 = document.querySelector(".models__list_xi");
const models10 = document.querySelector(".models__list_x");
const model15Template = document.querySelector("#model-15-template").content.querySelector(".model");
const model14Template = document.querySelector("#model-14-template").content.querySelector(".model");
const model13Template = document.querySelector("#model-13-template").content.querySelector(".model");
const model12Template = document.querySelector("#model-12-template").content.querySelector(".model");
const model11Template = document.querySelector("#model-11-template").content.querySelector(".model");
const model10Template = document.querySelector("#model-11-template").content.querySelector(".model");

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
  const modelColors = models15.querySelector(".model__color");
  const modelTitle = models15.querySelector(".model__title");
  const modelMemoryFirst = models15.querySelector(".model__memory_first");
  const modelPriceFirst = models15.querySelector(".model__price_first");
  const modelMemorySecond = models15.querySelector(".model__memory_second");
  const modelPriceSecond = models15.querySelector(".model__price_second");

  modelImage.setAttribute("src", image);
  modelColors.style.backgroundColor = colors;
  modelTitle.textContent = title;
  modelMemoryFirst.textContent = memory_first;
  modelPriceFirst.textContent = price_first;
  modelMemorySecond.textContent = memory_second;
  modelPriceSecond.textContent = price_second;

  return models15;
}


function createModel14({
  image,
  colors,
  title,
  memory_first,
  price_first,
  memory_second,
  price_second,
}) {
  let i = 0;
  const models14 = model14Template.cloneNode(true);
  const modelImage = models14.querySelector(".model__image");
  const modelColors = models14.querySelector(".model__color");
  const modelTitle = models14.querySelector(".model__title");
  const modelMemoryFirst = models14.querySelector(".model__memory_first");
  const modelPriceFirst = models14.querySelector(".model__price_first");
  const modelMemorySecond = models14.querySelector(".model__memory_second");
  const modelPriceSecond = models14.querySelector(".model__price_second");

  initialIPhones14[i].colors.forEach(color => {
    console.log(color);  // This line is now part of the code
  });

  modelImage.setAttribute("src", image);
  modelColors.style.backgroundColor = colors;
  modelTitle.textContent = title;
  modelMemoryFirst.textContent = memory_first;
  modelPriceFirst.textContent = price_first;
  modelMemorySecond.textContent = memory_second;
  modelPriceSecond.textContent = price_second;

  return models14;
}

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
  const modelColors = models13.querySelector(".model__color");
  const modelTitle = models13.querySelector(".model__title");
  const modelMemoryFirst = models13.querySelector(".model__memory_first");
  const modelPriceFirst = models13.querySelector(".model__price_first");
  const modelMemorySecond = models13.querySelector(".model__memory_second");
  const modelPriceSecond = models13.querySelector(".model__price_second");

  modelImage.setAttribute("src", image);
  modelColors.style.backgroundColor = colors;
  modelTitle.textContent = title;
  modelMemoryFirst.textContent = memory_first;
  modelPriceFirst.textContent = price_first;
  modelMemorySecond.textContent = memory_second;
  modelPriceSecond.textContent = price_second;

  return models13;
}

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
  const modelColors = models12.querySelector(".model__color");
  const modelTitle = models12.querySelector(".model__title");
  const modelMemoryFirst = models12.querySelector(".model__memory_first");
  const modelPriceFirst = models12.querySelector(".model__price_first");
  const modelMemorySecond = models12.querySelector(".model__memory_second");
  const modelPriceSecond = models12.querySelector(".model__price_second");

  modelImage.setAttribute("src", image);
  modelColors.style.backgroundColor = colors;
  modelTitle.textContent = title;
  modelMemoryFirst.textContent = memory_first;
  modelPriceFirst.textContent = price_first;
  modelMemorySecond.textContent = memory_second;
  modelPriceSecond.textContent = price_second;

  return models12;
}

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
  const modelColors = models11.querySelector(".model__color");
  const modelTitle = models11.querySelector(".model__title");
  const modelMemoryFirst = models11.querySelector(".model__memory_first");
  const modelPriceFirst = models11.querySelector(".model__price_first");
  const modelMemorySecond = models11.querySelector(".model__memory_second");
  const modelPriceSecond = models11.querySelector(".model__price_second");

  modelImage.setAttribute("src", image);
  modelColors.style.backgroundColor = colors;
  modelTitle.textContent = title;
  modelMemoryFirst.textContent = memory_first;
  modelPriceFirst.textContent = price_first;
  modelMemorySecond.textContent = memory_second;
  modelPriceSecond.textContent = price_second;

  return models11;
}

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

function renderModels15(data) {
  models15.append(createModel15(data));
}
function renderModels14(data) {
  models14.append(createModel15(data));
}
function renderModels13(data) {
  models13.append(createModel15(data));
}
function renderModels12(data) {
  models12.append(createModel15(data));
}
function renderModels11(data) {
  models11.append(createModel15(data));
}
function renderModels10(data) {
  models10.append(createModel15(data));
}