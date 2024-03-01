"use strict";
// Exercise 042
Object.defineProperty(exports, "__esModule", { value: true });
exports.make_Great = void 0;
var task041_1 = require("../task041/task041"); //Import Function from exercise 41
// create new function and modified it.
function make_Great(magician_Names) {
    return magician_Names.map(function (magician_Names) { return "The Great ".concat(magician_Names); });
}
exports.make_Great = make_Great;
// declare another variable to modify another function.
var modify_array = make_Great(task041_1.magician_Names);
(0, task041_1.show_magicians)(modify_array);
