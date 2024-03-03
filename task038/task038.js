// Exercise 038
// Describe City 
function describe_City(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// Function call 
describe_City("karachi");
describe_City("Hyderabad");
describe_City("Islamabad");
describe_City("London", "UK"); // Not in default country
export {};
