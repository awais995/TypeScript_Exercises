"use strict";
// Exercise 27
// If else Chain
let alien2 = ["Green", "Yellow", "Red"];
//1st Version
if (alien2[0] === "Green") {
    console.log(`${alien2[0]} Player earned 5 Points.`);
}
else if (alien2[1] === "Yellow") {
    console.log("Player earned 10 points");
}
else if (alien2[2] === "Red") {
    console.log("Player earned 15 points");
}
//2nd version
if (alien2[0] != "Green") {
    console.log("Player earned 5 Points.");
}
else if (alien2[1] === "Yellow") {
    console.log(`${alien2[1]} Player earned 10 points`);
}
else if (alien2[2] === "Red") {
    console.log("Player earned 15 points");
}
// 3rd version
if (alien2[0] != "Green") {
    console.log("Player earned 5 Points.");
}
else if (alien2[1] != "Yellow") {
    console.log("Player earned 10 points");
}
else if (alien2[2] === "Red") {
    console.log(`${alien2[2]} Player earned 15 points`);
}
