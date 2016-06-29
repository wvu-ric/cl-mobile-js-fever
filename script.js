var tempString = prompt("What is your temperature?");

var tempNum = Number(tempString);

if (tempNum > 98.6) {
	alert ("Your temperature is high.");
} else if (tempNum == 98.6) {
		alert ("Your temperature is just right!");
} else {
	alert ("Your temperature is low.");
}

