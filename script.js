//Josh Matheny "Fever" Assignment
var tempString = prompt("What is your temperature?");

var tempNum = Number(tempString)

//Chose a value for the normal body temp of the user
var bodytemp = 98.6;

//Checking to see if User's temp is okay...
if (tempNum === bodytemp) {
  alert("The users temperature is just right...");
} else {
  //Checking to see if users temp is too high...
  if (tempNum > bodytemp) {
    alert("The users temperature is high")
  } else {
    //Checking to see if users temp is too low...
    if (tempNum < bodytemp) {
      alert("The users temperature is low")
    }
    }
  }
