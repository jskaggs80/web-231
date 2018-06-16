/*
============================================
; Title:  skaggs-exercises-4.2.js
; Author: Professor Krasso 
; Date:   13 June 2018
; Modified By: Jake Skaggs
; Description: Arrays
;===========================================
*/var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.2
 Today's Date

 Apple
 Orange
 Banana
 Mango
 Pear
 */

// start program

var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// function
function getFruit(arr) {
    for (var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }    
}


// Output from the getFruit() function

//Assignment output
console.log(header.display("Jake", "Skaggs", "Exercise 4.2") + "\n");
getFruit(fruits);


// end program