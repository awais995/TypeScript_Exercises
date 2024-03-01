// Exercise 042

import { show_magicians,magician_Names } from "../task041/task041"; //Import Function from exercise 41

// create new function and modified it.
function make_Great(magician_Names:string[]){
    return magician_Names.map((magician_Names)=>`The Great ${magician_Names}`)
}

// declare another variable to modify another function.
let modify_array = make_Great(magician_Names);
show_magicians(modify_array); 

export {make_Great}
