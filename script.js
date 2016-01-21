var tempString = prompt("What is your temperature?");

var tempNum = Number(tempString);

if (tempNum == 98.6) {
  alert("you are fine");
}
else if (tempNum >= 98.6 ) {
  alert("you are too hot");
}
else if (tempNum <= 98.6){
  alert("You are too cold");
}

else {
  alert("you are not ok");
}

// Put your if logic here
