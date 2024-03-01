"use strict";
// Exercise 36
Object.defineProperty(exports, "__esModule", { value: true });
exports.make_shirt = void 0;
// T-Shirts
// Function Declatrion
function make_shirt(size, message) {
    console.log(`\nA ${size} -sized T-Shirt print the message ${message}`);
}
exports.make_shirt = make_shirt;
// function call back
// Print message on the size of T-Shirt.
make_shirt("small", "GenAI Engineer" + "\n");
