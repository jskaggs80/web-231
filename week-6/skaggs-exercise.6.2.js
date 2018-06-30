/*
============================================
; Title:  skaggs-assignment-6.2.js
; Author: Professor Krasso 
; Date:   24 June 2018
; Modified By: Jake Skaggs
; Description: Exception Handling
;===========================================
*/
var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 6.2
 Today's Date

 Catch clause: <Your message>
 Finally clause reached: End of program â€¦

 */

// start program

console.log(header.display("Jake", "Skaggs", "Exercise 6.2") + "\n");

try {
    var num1 = 8;

    var num2 = 0;

    var multiply = num1 * num2;

if (multiply == 0) throw "Nooooo";
    console.log(multiply);
} catch (err) {
    console.log("Catch clause: " + err );
} finally {
    console.log("Finally clause reached: End of program...");
}

// end program