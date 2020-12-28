function changeColor() {
  const color = ["#fa5252", "#fab005", "#12b886", "#228be6"];
  const colorId = ["red", "yellow", "green", "blue"];

  for (i = 0; i < 4; i++) {
    document.getElementById(colorId[i]).style.background = color[i];
  }

  function red() {
    document.getElementById("cal-left").style.background = "#fa5252";
  }
  function yellow() {
    document.getElementById("cal-left").style.background = "#fab005";
  }
  function green() {
    document.getElementById("cal-left").style.background = "#12b886";
  }
  function blue() {
    document.getElementById("cal-left").style.background = "#228be6";
  }
  document.getElementById("red").addEventListener("click", red);
  document.getElementById("yellow").addEventListener("click", yellow);
  document.getElementById("green").addEventListener("click", green);
  document.getElementById("blue").addEventListener("click", blue);
}

changeColor();
