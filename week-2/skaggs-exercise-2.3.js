/*
============================================
; Title:  skaggs-exercise-2.2.js
; Author: Professor Krasso 
; Date:   24 May 2018
; Modified By: Jake Skaggs
; Description: Functions
;===========================================
*/

var header = require('../header.js'); 

// start program

/*
    Expected output:

    FirstName LastName
    Exercise 2.3
    Today's Date

    Hello FirstName LastName!

    Hint: Use your personal header display function and
    refer to page 178 for implementing function properties
*/ 

// function properties go here...
myName.jake = "Jake"; 


// function 
function myName() {    
    function lName() { 
        //function property 
        lName.l = "Skaggs"; 
        //return property     
        return lName.l;
    };
    return "Hello " + myName.jake + " " + lName() + "!";
}

// output 
console.log('\n'); 
console.log(header.display("Jake", "Skaggs", "Exercise 2.3") + "\n");
console.log(myName());




// end program 