var tempString = prompt("What is your temperature?");

var tempNum = Number(tempString)


// Put your if logic here
if(tempNum < 95) alert("You seem cold!");
else if(tempNum > 100) alert("You seem hot!");
else alert("You're probably alright.");
