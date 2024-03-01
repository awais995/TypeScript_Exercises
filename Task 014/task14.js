"use strict";
// Exercise 14
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest_list = void 0;
// Guest List
let g = 0;
let Guest_list = ["Ahmed", "Ali", "Sir Qasim", "Awais"];
exports.Guest_list = Guest_list;
//Print Invitaion
for (g = 0; g < Guest_list.length; g++) {
    console.log(`Hello ${Guest_list[g]}, I would like to invite you to dinner.\n`);
}
