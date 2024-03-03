// Exercise 32
// List 1
let current_Users = ["Awais", "Ahmed", "Aslam", "Qasim", "Muneer"];
// List 2
let new_Users = ["Ali", "Rafiu", "Faizan", "Awais", "Ahmed"];
// convert current users into lowerCase
let case_Incensitive = current_Users.map(user => user.toLowerCase());
// loop 
for (let user of new_Users) {
    if (case_Incensitive.includes(user.toLowerCase())) {
        console.log(`The UserName ${user} is available please enter a new user name.`);
    }
    else {
        console.log(`The UserName ${user} is not available`);
    }
}
export {};
