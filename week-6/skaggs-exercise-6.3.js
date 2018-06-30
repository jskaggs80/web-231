/*
============================================
; Title:  skaggs-assignment-6.3.js
; Author: Professor Krasso 
; Date:   29 June 2018
; Modified By: Jake Skaggs
; Description: Object Literals
;===========================================
*/

var header = require('../header.js');



/*
 Expected output:

 FirstName LastName
 Exercise 6.3
 Today's Date

 {id: <ticket id>, name: <ticket name>, requester: <your name>}

 */

// start program

console.log(header.display("Jake", "Skaggs", "Exercise 6.3") + "\n");

var ticket = {
    id: 1234,
    name: "Marty McFly",
    requestor: "Jake Skaggs"
};

console.log("id: " + ticket.id + ", name: " + ticket.name +  ", requestor: " + ticket.requestor);

// end program