"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.change_Guest = void 0;
const task14_1 = require("../Task 014/task14");
//Changing Guest list
console.log(`Unfortunately, ${task14_1.Guest_list[0]} Can't make it to the dinner.`);
// Replace the guest who can't make it.
let change_Guest = task14_1.Guest_list.splice(2, 1, "Sir Zia Khan");
exports.change_Guest = change_Guest;
console.log(change_Guest);
console.log(task14_1.Guest_list);
//print 2nd set of invitation
let i = 0;
for (i = 0; i < task14_1.Guest_list.length; i++) {
    console.log(`${task14_1.Guest_list[i]} I would like to invite you to dinner.`);
}
