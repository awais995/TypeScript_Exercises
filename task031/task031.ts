// Exercise 31
//No Users: Ensure your user list isn't empty 
let users:string [] = [];

// Before greeting check are there any users?

if(users.length === 0){
    console.log("List is empty! we need to find some users");
} else {
    console.log(`Hello ${users} Thankyou for logging again.`);
}