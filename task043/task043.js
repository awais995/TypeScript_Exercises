"use strict";
// exercise 43
Object.defineProperty(exports, "__esModule", { value: true });
// Import magician_Names, Show_magicians and make_Great from exercises 41 and 42.
const task041_1 = require("../task041/task041");
const task042_1 = require("../task042/task042");
// Make Copy of the magicain_Names
let magician_Names_Copy = (0, task042_1.make_Great)([...task041_1.magician_Names]); // used tripple dots []...] for making a copy of an array.
(0, task041_1.show_magicians)(task041_1.magician_Names);
(0, task041_1.show_magicians)(magician_Names_Copy);
