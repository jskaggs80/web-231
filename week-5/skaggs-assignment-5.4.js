/*
============================================
; Title:  skaggs-assignment-5.4.js
; Author: Professor Krasso 
; Date:   23 June 2018
; Modified By: Jake Skaggs
; Description: Arrays Part II
;===========================================
*/

var header = require('../header.js');

/*
Expected output:

 FirstName LastName
 Assignment 5.4
 Today's Date

 -- COMPOSER BY RATING --
 Rating: 8
 Composer: Beethoven

 Rating: 10
 Composer: Mozart

 Rating: 9
 Composer: Bach

 Rating: 6
 Composer: Haydn

 Rating: 5
 Composer: Schubert

 -- COMPOSER BY GENRE --
 Genre: Classical
 Composer: Beethoven

 Genre: Classical
 Composer: Mozart

 Genre: Classical
 Composer: Bach

 Genre: Classical
 Composer: Haydn

 Genre: Classical
 Composer: Schubert
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

console.log(header.display("Jake", "Skaggs", "Assignment 5.4") + "\n");

//By ratings
console.log("-- COMPOSER BY RATING --" + "\n");

var comnposersByRating = famousComposers.map(function(composer, name) {
    return composer.rating + " " + "\n"+ "Composer: " + composer.lastName;    
});

//output
comnposersByRating.forEach(function(rating, name){
    console.log("Rating: " + rating + "\n")
});

//By genre
console.log("\n" + "-- COMPOSER BY GENRE --"+ "\n");
var composersByGenre = famousComposers.map(function(composer, name) {
    return composer.genre + " " + "\n"+ "Composer: " + composer.lastName;
});


//output
composersByGenre.forEach(function(genre, nae){
    console.log("Genre: " + genre + "\n")
});

//End Program