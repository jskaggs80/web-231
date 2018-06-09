/*
============================================
; Title:  skaggs-exercise-3.2.js
; Author: Professor Krasso 
; Date:   08 June 2018
; Modified By: Jake Skaggs
; Description: Pattern Matching Functions
;===========================================
*/


var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 3.2
    Today's Date

    // output from the match() function 
    false
    true 

    // output from the if...else blocks 
    Truck and Car do not match!
    Bike and Bike do match!
    Four and Three do not match!
*/ 

// functions 
function match(itemOne, itemTwo) {
    if(itemOne == "cheese" && itemTwo == "ball"){
        return true;
    }else{
        return false;
    }
} 

function logMismatch(mismatchOne, mismatchTwo) {
    if(mismatchOne !== mismatchTwo){
        return (mismatchOne + " and " + mismatchTwo + " do not match!");
    }else{
        return (mismatchOne + " and " + mismatchTwo + " do match!");
    }
}

function logMatch(matchOne, matchTwo) {
    if(matchOne === matchTwo){
        return (matchOne + " and " + matchTwo + " do match!" );
    }else{
        return (matchOne + " and " + matchTwo + " do not match!" );
    }
}

// six (6) test variables 
var thingOne = "cheese";
var thingTwo = "ball";
var thingThree = "Truck";
var thingFour = "Car";
var thingFive = "Bike";
var thingSix = "Bike";


// Output from the match() function... 
console.log(header.display("Jake", "Skaggs", "Exercise 3.2") + "\n");
console.log(match(thingOne, thingTwo));
console.log('\n'); 
console.log(logMismatch(thingThree, thingFour))
console.log(logMatch(thingFive, thingSix)); 
console.log(logMatch("Four", "Three"));
console.log('\n'); 
console.log("Output from if else block below...");


// Conditional "if...else" statements. Include checks for all six (6) test variables 
if (match(thingOne, thingTwo) === true) {
    logMatch();
    console.log("Match");
} else {
    logMismatch();
    console.log("Mis-Match");
}
 



// end program