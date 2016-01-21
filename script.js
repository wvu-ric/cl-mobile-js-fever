var tempString = prompt("What is your temperature?");

var tempNum = Number(tempString)


if ( tempNum < 98 ) {
   alert("You're freezing!");
}

else if ( tempNum == 98) {
   alert("You're just fine!")
}

else if ( tempNum > 98 ) {
  alert("You're burning up!");
}
