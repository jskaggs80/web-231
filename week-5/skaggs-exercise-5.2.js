/*
============================================
; Title:  skaggs-assignment-5.2.js
; Author: Professor Krasso 
; Date:   21 June 2018
; Modified By: Jake Skaggs
; Description: Arrays Part II
;===========================================
*/
var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 5.2
 Today's Date

 Oysters
 Shrimp
 Steak
 Tacos
 Sushi

 */

// start program
var foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Shushi"];

//output
console.log(header.display("Jake", "Skaggs", "Exercise 5.2") + "\n");

foods.forEach(function(food){    
    console.log(food);
})

// end program

