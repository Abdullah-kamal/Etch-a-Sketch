const container = document.getElementById("container");
let count = 0;

for (let j = 0; j < 15; j++) {
  let liBreak = document.createElement("br");
  for (let i = 0; i <= 15; i++) {
    let element = document.createElement("div");
    element.className = "box";
    container.append(element);
  }
  container.append(liBreak);
}
