"use strict";
// Exercise 35
// Animals List
let animals = ["Horse", "Ostrich", "Rabbit"];
for (let animal of animals) {
    console.log(animal);
}
// Modify program for print the statement with each animal.
for (let statement of animals) {
    console.log(`${statement} is known of its ability to move quickly.\n`);
}
console.log(`What these animals have common? ${animals}\n`);
console.log(`Similarities: Speed Move Quickly, Long Legs, Herbivorous`);
