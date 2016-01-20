"use strict";
//
function check_temp() {
    //
    // getting user input
    var tempString = document.getElementById('user-temp').value;
    //
    // converting number
    var tempNum = Number(tempString);
    //
    // checking value of number
    var message = '';
    if (tempNum < 98.6) {
        message = 'Your temperture is too low!';
    }
    else if (tempNum == 98.6) {
        message = 'Your temperature is just right.';
    }
    else if (tempNum > 98.6) {
        message = 'Your temperature is too high!';
    }
    else {
        message = 'Invalid number entered: '+tempString+' -> '+tempNum;
    }
    //
    // outputting value
    document.getElementById('message').innerHTML = message;
}
