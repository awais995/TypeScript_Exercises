// Exercise 28

// Stages of life

let age : number = 4;

if (age <= 2 ){
    console.log("The person is a baby");
} else if (age >=2 && age < 4 ){
    console.log("The Person is todler.");
} else if (age >= 4 && age < 13 ){
    console.log("The person is a kid.");
} else if (age >=13 && age < 20){
    console.log("The person is teenager.");
} else if (age >= 20 && age < 65){
    console.log("The person is adult.");
} else if (age > 65){
    console.log("The person is an elder.");
} else {
    console.log("Age not found")
}

