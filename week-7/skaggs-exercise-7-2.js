/*
============================================
; Title:  skaggs-exercise-7.2.js
; Author: Professor Krasso 
; Date:   6 July 2018
; Modified By: Jake Skaggs
; Description: Constructor functions
;===========================================
*/

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Exercise 7.2
 Today's Date

 1 Thomas Edison Software Engineer
 2 Benjamin Franklin Programmer
 3 Nikola Tesla Project Manager
 4 Charles Babbage Product Manager
 5 Alexander Bell Business Analyst

 */

// start program

function Employee(name, title) {
    this.name = name;
    this.title = title;
}

var employee=[
    new Employee("Thomas Edison", "Software Engineer"),

    new Employee("Benjamin Franklin", "Programmer"),

    new Employee("Nikola Tesla", "Project Manager"),

    new Employee("Charles Babbage", "Product Manager"),

    new Employee("Alexander Bell", "Business Analyst")
]


console.log(header.display("Jake", "Skaggs", "Exercise 7.2") + "\n");

employee.forEach(function(employee){
    console.log(employee)
});
// end program5