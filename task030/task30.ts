// Exercise 30

/*
Here, we have an array called userNames [] 
I have declared another variable within a loop "userName" and check the value Admin from "userNames".
and write a if statement if the userName === "Admin" print secial message to him, 
otherwise print generic message.
*/

let user_Names: string [] = ["Admin", "Awais", "Faizan", "Wasif", "Taimoor", "Ayesha"];

for (let userName of user_Names){   
    if (userName === 'Admin'){
    console.log(`Hello ${userName} Would you like to see a status report?`);
    } else {
        console.log(`Hello ${userName} Thankyou for logging in again.`)
    }
}