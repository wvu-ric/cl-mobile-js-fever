var tempString = prompt("What is your temperature?");
// this is a comment
var tempNum = Number(tempString);

if (tempNum <= 98.6) {
alert("Congratulations, you do not have a fever")
} else {
  alert("Oops, you have a fever, go ahead and skip class");
}
