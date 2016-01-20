var tempString = prompt("What is your temperature?");

var tempNum = Number(tempString)


// Put your if logic here
if (tempNum <= 98.6) {
  alert("You do not have a fever");
}

if (tempNum > 98.6) {
  alert("You do have a fever");
}
