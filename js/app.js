"use strict";
let imageElements = document.getElementsByTagName("img");
let indexes = [-1, -1, -1];
let roundCount = 0;
const rounds = 5;
class Product {
  constructor(name, path) {
    this.name = name;
    this.path = path;
    this.clickCount = 0;
    this.shownCount = 0;
  }
}
const products = [
  new Product("bag", "images/bag.jpg"),
  new Product("banana", "images/banana.jpg"),
  new Product("bathroom", "images/bathroom.jpg"),
  new Product("boots", "images/boots.jpg"),
  new Product("breakfast", "images/breakfast.jpg"),
  new Product("bubblegum", "images/bubblegum.jpg"),
  new Product("chair", "images/chair.jpg"),
  new Product("cthulhu", "images/cthulhu.jpg"),
  new Product("dog-duck", "images/dog-duck.jpg"),
  new Product("dragon", "images/dragon.jpg"),
  new Product("pen", "images/pen.jpg"),
  new Product("pet-sweep", "images/pet-sweep.jpg"),
  new Product("scissors", "images/scissors.jpg"),
  new Product("shark", "images/shark.jpg"),
  new Product("sweep", "images/sweep.png"),
  new Product("tauntaun", "images/tauntaun.jpg"),
  new Product("unicorn", "images/unicorn.jpg"),
  new Product("usb", "images/usb.gif"),
  new Product("water-can", "images/water-can.jpg"),
  new Product("wine-glass", "images/wine-glass.jpg"),
];
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getRandomProducts() {
  let ret = [];
  for (let i = 0; i < 3; i++) {
    while (true) {
      let num = getRandomInt(products.length);
      if (!indexes.includes(num) && !ret.includes(num)) {
        ret.push(num);
        break;
      }
    }
  }
  console.log(ret);
  return ret;
}
function doRound() {
  indexes = getRandomProducts();
  for (let i = 0; i < 3; i++) {
    imageElements[i].src = products[indexes[i]].path;
    products[indexes[i]].shownCount++;
  }
}
function onClickHandler(event) {
  const id = event.target.id;
  roundCount++;
  products[indexes[id]].clickCount++;
  doRound();
  console.log(products);
  if (roundCount === rounds) {
    for (let i = 0; i < imageElements.length; i++) {
      imageElements[i].removeEventListener("click", onClickHandler);
    }
  }
}
function start() {
  for (let i = 0; i < imageElements.length; i++) {
    console.log("Event listed on the images");
    imageElements[i].addEventListener("click", onClickHandler);
  }
  doRound();
}
