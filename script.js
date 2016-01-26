var tempString = prompt("What is your temperature?");

var tempNum = Number(tempString);


if (tempNum == 98) {
  alert("Just right!");
}

if (tempNum < 98) {
  alert("Too low!");
}

if(tempNum > 98) {
  alert("Too high!");
}
