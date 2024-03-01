"use strict";
// Exercise 24
// Tests for equality and inequality with strings
let doctor = "Medicine";
// Equal to
console.log("Is doctor === 'Medicine'? I predict true");
console.log(doctor === 'Medicine');
// Not Equal to
console.log("Is doctor != 'Medicine'? I predict false");
console.log(doctor != 'Medicine');
//Test Using lowerCase Function
console.log("doctor.toLowerCase() === 'medicine'? I predict true");
console.log(doctor.toLowerCase() === "medicine");
console.log("doctor.toLowerCase() !== 'medicine'? I predict false");
console.log(doctor.toLowerCase() !== "medicine");
// Numerical Tests
let a = 5;
let b = 8;
// Equal to Not equal to Test
console.log("Is a equal to b ? I Pedict false");
console.log(a === b);
console.log("Is a not equal to b ? I Pedict true");
console.log(a !== b);
// Greate than and Less than Test
console.log("Is a greater than b? I predict false");
console.log(a > b);
console.log("Is a less than b? I predict true");
console.log(a < b);
// Greater than or Equal to | less than or equal to
console.log("Is a greatet than or equal to b ? I predict false");
console.log(a >= b);
console.log("Is a less than or equal to b ? I predict true");
console.log(a <= b);
// && AND Operator 
console.log("Is a less than b and b greater than a ? I predict true");
console.log(a < b && b > a);
console.log("Is b less than a and a greater than b ? I predict false");
console.log(b < a && a > b);
console.log("Is b greater than a and a greater than b ? I predict false");
console.log(b > a && a > b); //if any statemet become false it will become false.
// || Or Operators
console.log("Is a less than b OR b greater than a ? I predict true");
console.log(a < b || b > a);
console.log("Is b less than a || a greater than b ? I predict false");
console.log(b < a || a > b);
console.log("Is b greater than a || a greater than b ? I predict false");
console.log(b > a || a > b); // if any statement become true it will become true.
// Test whether the item is in arry
let seat_number = [3, 5, 7, 9];
let item = 7;
if (seat_number.includes(item)) {
    console.log(`${item} is available in array`);
}
else {
    console.log(`${item} is not available in array`);
}
// Test whether the item is in not in arry
let seat_number2 = [3, 5, 7, 9];
let item2 = 6;
if (seat_number2.includes(item2)) {
    console.log(`${item2} is available in array`);
}
else {
    console.log(`${item2} is not available in array`);
}
