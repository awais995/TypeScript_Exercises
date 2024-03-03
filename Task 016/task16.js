// Exercise 16
import { change_Guest } from "../Task 015/task15.js";
// More Guests
console.log(`Good News! We found a bigger dinner table.\n`);
// add new guests
change_Guest.unshift("Wasif");
// add new guest in middle
change_Guest.splice(3, 0, "Rafiu");
// add new guest in last
change_Guest.push("Sir Aleem");
for (let j = 0; j < change_Guest.length; j++) {
    console.log(` ${change_Guest[j]} I would like to invite you to dinner.  \n`);
}
let Updated_list = change_Guest;
export { Updated_list };
