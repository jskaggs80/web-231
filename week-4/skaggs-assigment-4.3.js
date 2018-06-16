/*
============================================
; Title:  skaggs-exercises-4.3.js
; Author: Professor Krasso 
; Date:   15 June 2018
; Modified By: Jake Skaggs
; Description: Arrays
;===========================================
*/
var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 4.3
 Today's Date

 -- DISPLAYING ARRAY ITEMS --
 Car
 Truck
 Motorcycle
 Airplane
 Bus

 -- SELECTED VALUE --
 Motorcycle

 -- SELECTED VALUE --
 Bus

 */

// start program

var cars = ["DeLorean", "Ford F-150", "Lamborghini", "Bugatti", "Ferrari"];

// function
function getValue(arr, val) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === val) {
            console.log(arr[i]);
        }
    }
}


// Output
console.log(header.display("Jake", "Skaggs", "Exercise 4.3") + "\n");
console.log("-- DISPLAYING ARRAY ITEMS --");
for (var x = 0; x < cars.length; x++) {
    console.log(cars[x]);
}
console.log("\n" + "-- SELECTED VALUE --")
getValue(cars, "DeLorean");

console.log("\n" + "-- SELECTED VALUE --")
getValue(cars, "Bugatti");

// end program