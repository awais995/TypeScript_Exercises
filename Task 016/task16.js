"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Updated_list = void 0;
// Exercise 16
const task15_1 = require("../Task 015/task15");
// More Guests
console.log(`Good News! We found a bigger dinner table.\n`);
// add new guests
task15_1.change_Guest.unshift("Wasif");
// add new guest in middle
task15_1.change_Guest.splice(3, 0, "Rafiu");
// add new guest in last
task15_1.change_Guest.push("Sir Aleem");
let j = 0;
for (j = 0; j < task15_1.change_Guest.length; j++) {
    console.log(` ${task15_1.change_Guest[j]} I would like to invite you to dinner.  \n`);
}
let Updated_list = task15_1.change_Guest;
exports.Updated_list = Updated_list;
