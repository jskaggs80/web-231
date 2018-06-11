/*
============================================
; Title:  skaggs-assignment-3.4.js
; Author: Professor Krasso 
; Date:   09 June 2018
; Modified By: Jake Skaggs
; Description: Pattern Matching Functions
;===========================================
*/
var header = require('../header.js'); 
//Assignment output
console.log(header.display("Jake", "Skaggs", "Assignment 3.4") + "\n");

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 3.4
    Today's Date

    -- Displaying for loop --
    6 does not match 4!
    6 does not match 7!
    6 does not match 4!
    6 does not match 8!
    6 does not match 9!
    6 does not match 7!
    6 does match 6!
    6 does not match 3!

    -- Displaying while loop --
    6 does not match 5!
    6 does not match 10!
    6 does not match 8!
    6 does not match 10!
    6 does not match 10!
    6 does match 6!
    6 does not match 4!
    6 does not match 3!
    6 does match 6!
    6 does match 6!

*/ 

// test variable

var input = 6;
var index = 6;

// for loop
console.log("-- Displaying for loop --");

for (var x = 0; x < 10; x++) {   
      
    switch (x) {
        case 4:
            console.log( input + " does not match 4!");
            break;
        case 7:
            console.log( input + " does not match 7!");
            break;
        case 4:
            console.log( input + " does not match 4!");
            break;
        case 8:
            console.log( input + " does not match 8!");
            break;
        case 9:
            console.log( input + " does not match 9!");
            break;
        case 7:
            console.log( input + " does not match 7!");
            break;
        case 6:
            console.log( input + " does match 6!");
            break;
        case 3:
            console.log( input + " does not match 3!");
            break;
    }
}



// while loop
console.log("\n-- Displaying while loop --"); 



while(index < 10) {
    
    switch (index) {
        case (index === 5):
            console.log( index + " does not match 5!");
            break;
        case (index === 10):
            console.log( index + " does not match 10!");
            break;
        case 8:
            console.log( index + " does not match 8!");
            break;
        case 10:
            console.log( index + " does not match 10!");
            break;
        case 10:
            console.log( index + " does not match 10!");
            break;
        case 6:
            console.log( index + " does match 6!");
            break;
        case 4:
            console.log( index + " does not match 4!");
            break;
        case 3:
            console.log( index + " does not match 3!");
            break;
        case 6:
            console.log( index + " does match 6!");
            break;
        case 6:
            console.log( index + " does match 6!");
            break;
        
    }

    index++;
    
}



// Reused functions from exercise-3.2.js

function match(input) {
    if(input == x){
        return true;                        
    }else{
        return false;            
    }
}

function logMismatch(input, x) {
    if(input !== x){
        return (input + " and " + x + " do not match!");
    }else{
        return (input + " and " + x + " do match!");
    }
}

function logMatch(input, x) {
    if(input === x){
        return (input + " and " + x + " do match!" );
    }else{
        return (input + " and " + x + " do not match!" );
    }
} 