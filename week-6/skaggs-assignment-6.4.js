/*
============================================
; Title:  skaggs-assignment-6.4.js
; Author: Professor Krasso 
; Date:   29 June 2018
; Modified By: Jake Skaggs
; Description: Nested Object Literals
;===========================================
*/

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 Assignment 6.4
 Today's Date

 Ticket <id> was created on <dateCreated> and assigned to employee <firstName lastName> (<jobTitle>).

 */

// start program

var ticket = {
    // ticket properties
    id: 1234,
    name: "Marty McFly",
    date: Date(),
    priority: 1,
    personId: 1220,

    person: {
        // person properties
        id: 1234,
        fName: "Marty",
        lName: "McFly",
        title: "Assistant to the regional manager"
    }
};

console.log(header.display("Jake", "Skaggs", "Assigment 6.4") + "\n");

console.log("Ticket " + ticket.id + " was create on " + ticket.date + " and assigned to employee " + ticket.person.fName + " " + ticket.person.lName + " (" + ticket.person.title + ")!");

// end program