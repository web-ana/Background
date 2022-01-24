const bgColors = ["red", "yellow", "green", "blue"];

let i = 0;
function changeBackground() {
  document.getElementById("colorName").innerHTML = bgColors[i];
  document.body.style.background = bgColors[i];
  i > bgColors.length - 2 ? (i = 0) : i++;
}
