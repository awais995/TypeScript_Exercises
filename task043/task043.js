// Day 15 Challenge Question 43
//import magicians and showmagicians from previous exercises
import { magicians, show_magicians } from "../task041 & 42/task041 & 42.js";
// Make a copy of an array to preserve the original magician names while creating a new great list.
function make_great(magicians) {
    let The_Great = []; // Create a new empty list with the name "The_Great"
    magicians.forEach(magician => {
        The_Great.push(`${magician} The Great`); // Push the magicians names into The_Great list.
    });
    return The_Great; // return the_Great list from the function
}
let The_Great = make_great(magicians.slice()); // Create a new modified list
show_magicians(magicians); // Original magicians list
show_magicians(The_Great); // Modified magicians list
