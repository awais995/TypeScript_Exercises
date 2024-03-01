// Exercise 33


// Store the numbers in array from 1-9

let ordinal_number: Number [] = [1,2,3,4,5,6,7,8,9];

// Loop 
for (let num1 of ordinal_number){
 
// if else chain inside the loop
    if (num1 === 1) {
        console.log(`${num1}st`);
    } else if (num1 === 2){
        console.log(`${num1}nd`);
    } else if (num1 === 3){
        console.log(`${num1}rd`);
    } else {
        console.log(`${num1}th`);
    }
}