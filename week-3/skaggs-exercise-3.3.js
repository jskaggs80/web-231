/*
============================================
; Title:  skaggs-exercise-3.2.js
; Author: Professor Krasso 
; Date:   09 June 2018
; Modified By: Jake Skaggs
; Description: Pattern Matching Functions
;===========================================
*/


var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.3
    Today's Date

    // Expected output
    The enter key was pressed 

*/ 

// Multiway branch of if statements (replace with a switch statement)
var eventKeyCode = 13;

//Assignment output
console.log(header.display("Jake", "Skaggs", "Exercise 3.3") + "\n");

switch (eventKeyCode) {
    case 13:
        console.log("The enter key was pressed");
        break;
    case 16:
        console.log("The shift key was pressed");
        break;
    case 32:
        console.log("The spacebar key was pressed");
        break;
    case 8:
        console.log("The backspace / delete key was pressed");
        break;
    default:
        console.log("Unrecognized key press"); 

}

// end program 