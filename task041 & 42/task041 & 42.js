// Exercise 41 and 42
// Display magician names from an array
export let magicians = ["Harry", "Ricky", "David"];
export function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician); // Print the simple magician names
    }
}
// Day 14 Challenge Question 42  
// Modify the function and Add "The Great" to magician names.
function the_Great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] += " The Great";
    }
    for (let magician2 of magicians) {
        console.log(magician2);
    }
    ;
}
// show_magicians(magicians);  // Original Array 
// the_Great(magicians);       // Modified Arrya
// show_magicians(magicians);  // show modified array names
