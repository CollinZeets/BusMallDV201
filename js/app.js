"use strict";
let imageElements = document.getElementsByTagName("img");
const rounds = 25;
class Product {
  constructor(name, path) {
    this.name = name;
    this.path = path;
    this.clickCount = 0;
    this.shownCount = 0;
  }
}
const products = [
  new Product("cropped", "images/cropped.jpg"),
  new Product("doubleDecker", "images/doubleDecker.jpg"),
  new Product("richfield", "images/richfield.jpg"),
  new Product("electric", "images/electric.jpg"),
  new Product("valley", "images/valley.jpg"),
];
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getRandomProducts() {
  let ret = [getRandomInt(products.length)];
  while (true) {
    let num = getRandomInt(products.length);
    if (ret[0] !== num) {
      ret.push(num);
      break;
    }
  }
  while (true) {
    let num = getRandomInt(products.length);
    if (ret[0] !== num && ret[1] !== num) {
      ret.push(num);
      break;
    }
  }
  console.log(ret)
  return ret;
}
function doRound(){

    const indexes = getRandomProducts();
    for (let i = 0; i < 3; i ++){
    imageElements[i].src = products[indexes[i]].path;
    products[indexes[i]].shownCount ++;
    }
}
for (let i = 0; i < imageElements.length; i++) {
  console.log("Event listen on the images");
  imageElements[i].addEventListener("click", imageClicked);
}
