/*
============================================
; Title:  skaggs-assignment-5.3.js
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
 Exercise 5.3
 Today's Date

 -- COMPOSERS --
 Last Name: Beethoven, Genre: Classical, Rating: 8
 Last Name: Mozart, Genre: Classical, Rating: 10
 Last Name: Bach, Genre: Classical, Rating: 9
 Last Name: Haydn, Genre: Classical, Rating: 6
 Last Name: Schubert, Genre: Classical, Rating: 5

 */

// start program

var famousComposers = [
    {
        firstName: 'Ludwig',
        lastName: 'Beethoven',
        genre: 'Classical',
        rating: 10   //Number 1-10
    },
        
    {
        firstName: 'Wolfgang',
        lastName: 'Mozart',
        genre: 'Classical',
        rating: 9   //Number 1-10
    },

    {
        firstName: 'Frederic',
        lastName: 'Chopin',
        genre: 'Classical',
        rating: 6   //Number 1-10
    },

    {
        firstName: 'Pyotr',
        lastName: 'Tchaikovsky',
        genre: 'Classical',
        rating: 4   //Number 1-10
    },

    {
        firstName: 'Johann',
        lastName: 'Bach',
        genre: 'Classical',
        rating: 10   //Number 1-10
    }
];

//output
console.log(header.display("Jake", "Skaggs", "Exercise 5.3") + "\n");

famousComposers.forEach(function(composer){
    console.log('Name: ' + composer.firstName + ' ' + composer.lastName + ', Genre: ' + composer.genre + ', Rating: ' + composer.rating)
})


// end program