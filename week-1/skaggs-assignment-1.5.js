/*
============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   24 May 2018
; Modified By: Jake Skaggs
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Albert";
var myLastName = "Einstein";
var employeeFirstName = "Bob";
var employeeLastName = "Smith";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";
var address = "505 Main Street Omaha, NE";
var payRate = 10.5;
var hireDate = new Date(2016, 4, 22).toLocaleDateString() ;

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

var employeeRecords = "\n" + "First Name: " + employeeFirstName + "\n" 
    + "Last Name: " + employeeLastName + "\n" + "Address: " + address +
    "\n" + "Pay Rate: $" + payRate + "\n" + "Hire Date: " + hireDate;

console.log(programHeader);
console.log("\n"); 
console.log(employeeRecords);

// start of program - your code goes below this line



// end of program 