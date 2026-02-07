let container = document.getElementById("container");
const myButton = document.getElementById("myButton");
let element;

function createGrid(x, y) {
  while(x >= 100 || y >= 100) {
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

function removeGrid(x, y){
  for(let i = 0; i < x; i++){
    container.removeChild(container.children[0]);
  }
}
let a = 16;
let b = 16;

function generateGrid() {

  removeGrid(a, b);

  let x = prompt("x :");
  let y = prompt("y :");
  x = Number(x);
  y = Number(y);
  
  a = x;
  b = y;
  console.log(x, typeof x);
  console.log(y, typeof y);

  createGrid(x, y);
}
