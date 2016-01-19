"use strict";
//
// getting user input
var tempString = prompt("What is your temperature?");
//
// converting number
var tempNum = Number(tempString);
//
// checking value of number
if (tempNum < 98.6) {
    alert('Your temperture is too low!');
}
else if (tempNum == 98.6) {
    alert('Your temperature is just right.');
}
else if (tempNum > 98.6) {
    alert('Your temperature is too high!')
}
else {
    alert('Invalid number entered: '+tempString+' -> '+tempNum)
}
