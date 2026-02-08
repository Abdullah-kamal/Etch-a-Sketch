let container = document.getElementById("container");
const myButton = document.getElementById("myButton");
let element;

function createGrid(x, y) {
  while (x >= 100 || y >= 100) {
    x = prompt("Please type correct x: ");
    y = prompt("Please type correct y: ");
    x = Number(x);
    y = Number(y);
  }
  for (let j = 0; j < x; j++) {
    let lineBreak = document.createElement("div");
    for (let i = 0; i < y; i++) {
      element = document.createElement("div");
      element.classList.add("box");
      // element.className = "box";
      lineBreak.append(element);
    }
    container.append(lineBreak);
  }
}
createGrid(16, 16);

function removeGrid(x, y) {
  for (let i = 0; i < x; i++) {
    container.removeChild(container.children[0]);
  }
}
let p = 16;
let q = 16;

function generateGrid() {
  removeGrid(p, q);

  let x = prompt("x :");
  let y = prompt("y :");
  x = Number(x);
  y = Number(y);

  p = x;
  q = y;
  console.log(x, typeof x);
  console.log(y, typeof y);

  createGrid(x, y);
}

let myBox = document.getElementsByClassName("box");

function r() {
  let r = Math.floor(Math.random() * 255);
  return r;
}
function g(){
  let g = Math.floor(Math.random() * 255);
  return g;
}
function b(){
  let b = Math.floor(Math.random() * 255);
  return b;
}

Array.from(container.children).forEach((c) => {
  c.addEventListener("mouseover", (event) => {
    let red = r();
    let green = g();
    let blue = b();
    event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  });
  c.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "white";
  });
});
