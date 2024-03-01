"use strict";
// exercise 43
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import magician_Names, Show_magicians and make_Great from exercise 41
var task041_1 = require("../task041/task041");
var task042_1 = require("../task042/task042");
// Make Copy of the magicain_Names
var magician_Names_Copy = (0, task042_1.make_Great)(__spreadArray([], task041_1.magician_Names, true));
(0, task041_1.show_magicians)(task041_1.magician_Names);
(0, task041_1.show_magicians)(magician_Names_Copy);
