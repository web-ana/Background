const bgColors = ["red", "yellow", "green", "blue"];

let n = 0;
let i = 0;
for (i in bgColors) {
  document.getElementById("colorName").innerHTML = bgColors[n];
}
function changeColor() {
  document.body.style.background = bgColors[n];
  ++n;
}
