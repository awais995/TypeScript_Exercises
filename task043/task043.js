// exercise 43
// Import magician_Names, Show_magicians and make_Great from exercises 41 and 42.
import { magician_Names, show_magicians } from "../task041/task041.js";
import { make_Great } from "../task042/task042.js";
// Make Copy of the magicain_Names
let magician_Names_Copy = make_Great([...magician_Names]); // used tripple dots []...] for making a copy of an array.
show_magicians(magician_Names);
show_magicians(magician_Names_Copy);
