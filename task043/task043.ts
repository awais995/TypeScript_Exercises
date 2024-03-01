// exercise 43

// Import magician_Names, Show_magicians and make_Great from exercises 41 and 42.
import { magician_Names, show_magicians } from "../task041/task041";
import { make_Great } from "../task042/task042";

// Make Copy of the magicain_Names
let magician_Names_Copy = make_Great([...magician_Names]) // used tripple dots []...] for making a copy of an array.

show_magicians(magician_Names)
show_magicians(magician_Names_Copy)