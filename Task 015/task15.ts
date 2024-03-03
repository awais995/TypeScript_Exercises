import { Guest_list } from "../Task 014/task14.js";

//Changing Guest list
console.log(`Unfortunately, ${Guest_list[0]} Can't make it to the dinner.`);

// Replace the guest who can't make it.
let change_Guest : string [] = Guest_list.splice(2,1 ,"Sir Zia Khan");
console.log(change_Guest);
console.log(Guest_list);

//print 2nd set of invitation
let i = 0
for (i=0; i < Guest_list.length; i++){
    console.log(`${Guest_list[i]} I would like to invite you to dinner.`)
}

export {change_Guest};

