var tempString = prompt("What is your temperature?");

var tempNum = Number(tempString);


// Put your if logic here
if( tempNum == 98.6) {
  alert("Your temperature is just right!");
}
else if( tempNum < 98.6) {
  alert("Your temperature is low!");
}
else if( tempNum > 98.6) {
  alert("Your temperature is high! You have a fever!!");
}
else{
  alert("Invalid input!");
}
