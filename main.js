let width = 100;
let height = 100;
const container = document.getElementById("container");

let updateDimensions = setInterval(function () {
  width += 15;
  height += 5;
  container.style.width = width + "px";
  container.style.height = height + "px";
}, 1000);

function getRandomColor() {
  let hexaLetters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexaLetters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateColor() {
  container.style.background = getRandomColor();
}

setInterval(updateColor, 1000);