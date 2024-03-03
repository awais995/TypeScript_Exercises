// Exercise 17
// Shrinking Guest List
console.log(`Unfortunately! The new table won't arrive so that i can invite only two people.`);
import { Updated_list } from "../Task 016/task16.js";
while (Updated_list.length > 2) {
    let remove_Guest = Updated_list.pop();
    if (remove_Guest) {
        console.log(`Sorry ${remove_Guest} i can't invite you to dinner.\n`);
    }
}
let i = 0;
for (i = 0; i < Updated_list.length; i++) {
    console.log(`${Updated_list[i]} You are still invited.\n`);
}
Updated_list.pop();
Updated_list.pop();
console.log(Updated_list);
