"use strict";
let imageElements = document.getElementsByTagName("img");
let indexes = [-1, -1, -1];
let roundCount = 0;

const rounds = 5;
const products = checkLocalStorage();
class Product {
  constructor(name, path) {
    this.name = name;
    this.path = path;
    this.clickCount = 0;
    this.shownCount = 0;
  }
}

function checkLocalStorage() {
  let saved = localStorage.getItem("savedProducts");
  if (saved) {
    return JSON.parse(saved);
  } else {
    return [
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
  }
}
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
  localStorage.setItem("savedProducts", JSON.stringify(products));
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

function results() {
  document.getElementById("foo").appendChild(makeUL(products));
}
function makeUL(array) {
  // https://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array
  // Create the list element:
  let list = document.createElement("ul");

  for (let i = 0; i < array.length; i++) {
    // Create the list item:
    let item = document.createElement("li");

    // Set its contents:
    item.appendChild(
      document.createTextNode(
        array[i].name +
          " " +
          array[i].clickCount +
          " times clicked " +
          array[i].shownCount +
          " times seen"
      )
    );

    // Add it to the list:
    list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}

var ctx = document.getElementById("chart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  },
});

