"use strict";
// Exercise 17
Object.defineProperty(exports, "__esModule", { value: true });
// Shrinking Guest List
console.log(`Unfortunately! The new table won't arrive so that i can invite only two people.`);
const task16_1 = require("../Task 016/task16");
while (task16_1.Updated_list.length > 2) {
    let remove_Guest = task16_1.Updated_list.pop();
    if (remove_Guest) {
        console.log(`Sorry ${remove_Guest} i can't invite you to dinner.\n`);
    }
}
let i = 0;
for (i = 0; i < task16_1.Updated_list.length; i++) {
    console.log(`${task16_1.Updated_list[i]} You are still invited.\n`);
}
task16_1.Updated_list.pop();
task16_1.Updated_list.pop();
console.log(task16_1.Updated_list);
