var tempString = prompt("What is your temperature?");

var tempNum = Number(tempString);


// Put your if logic here

if(tempNum < 98){
  alert("Your temperature is too low for a fever!");
}

else if(tempNum == 98){
    alert("Your temperature is OK.")
}

else if(tempNum > 98){
alert("Your temperature is high!  You might have a fever.");
}
