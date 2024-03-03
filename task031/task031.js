// Exercise 31
let user_list = [];
if (user_list.length === 0) {
    console.log("We need to find some users.");
}
else {
    let age = 13; // Stages of life
    if (age <= 2) {
        console.log("The person is a baby");
    }
    else if (age >= 2 && age < 4) {
        console.log("The Person is todler.");
    }
    else if (age >= 4 && age < 13) {
        console.log("The person is a kid.");
    }
    else if (age >= 13 && age < 20) {
        console.log("The person is teenager.");
    }
    else if (age >= 20 && age < 65) {
        console.log("The person is adult.");
    }
    else if (age > 65) {
        console.log("The person is an elder.");
    }
    else {
        console.log("Age not found");
    }
}
export {};
