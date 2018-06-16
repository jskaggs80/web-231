/*
============================================
; Title:  skaggs-assignment-4.4.js
; Author: Professor Krasso 
; Date:   16 June 2018
; Modified By: Jake Skaggs
; Description: Arrays
;===========================================
*/

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Assignment 4.4
 Today's Date

 -- ORIGINAL ARRAY --
 Alabama
 Nebraska
 Iowa
 California
 Nevada

 -- SORTED ARRAY --
 Alabama
 California
 Iowa
 Nebraska
 Nevada

 -- SELECTED VALUE --
 Iowa

 */

// start program

var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"]

// function
function getValue(x, val) {
    for (var i = 0; i < states.length; i++){
        if (x[i] === val) {            
            return val;
        }
    }   
}


// Output
console.log(header.display("Jake", "Skaggs", "Exercise 4.4") + "\n");
console.log("-- Original Array --");
//for loop to itterate through and print states
for (var j = 0; j < states.length; j++) {
    console.log(states[j]);
}
//sorted Array
console.log("\n" + "-- SORTED ARRAY --")
states.sort();
var s = states.join(" " + "\n");
console.log(s);
//Selected Value
console.log("\n" + "-- SELECTED VALUE --")
var state = states.filter(getValue);
console.log(getValue(states, "Nebraska"));



// end program
