"use strict";
// Exercise 12
// Used Array with loop
var k = 0;
var names1 = ["Wasif", "Rafiu", "Naeem", "Ahmed", "Abubakar"];
for (k = 0; k < names1.length; k++) {
    console.log("How are you Mr. " + names1[k]); //simple method
    // Back Ticks Method ` ` Professional Method
    console.log(`How are you ${names1[k]}`);
}
