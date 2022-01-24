const bgColors = ["red", "yellow", "green", "blue"];

let n = 0;
let i = 0;
for (i in bgColors) {
  function changeColor() {
    document.getElementById("colorName").innerHTML = bgColors[n];
    document.body.style.background = bgColors[n];
    ++n;
  }
}
