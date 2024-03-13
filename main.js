let width = 100;
let height = 100;

let updateDimensions = setInterval(function () {
  width+=15;
  height+=5;
  document.getElementById('container').style.width = width + "px";
  document.getElementById('container').style.height = height + "px";
},1000);