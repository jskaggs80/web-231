/*
============================================
; Title:  skaggs-assignment-2.3.js
; Author: Professor Krasso 
; Date:   25 May 2018
; Modified By: Jake Skaggs
; Description: functions()
;===========================================
*/

var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>
    
    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/ 

// function(s) go here...
function fullName(fName, lName) {
    return fName + lName;
}

function dateWriter(year, month, day) {
    return new Date().toLocaleDateString();
}

function formatNumber(number, fixedPosition) {
    return number.toFixed(fixedPosition);
}

function convertToInt(string) {
    return string;
}

function convertToFloat(string) {
    //this code figures out how to format for dollars with 2 decimal places.
    return string.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

// output 
console.log('\n'); 
console.log(header.display("Jake", "Skaggs", "Exercise 2.4") + "\n");
console.log("Today's date is " + dateWriter(2018, 5, 25) + " and the current temperature is " + 
    formatNumber(94, 1) + ", I am " + convertToInt(37) + " year's old, and my savings account goal is $" + 
    convertToFloat(500304.01) + " dollars.")



// end program 