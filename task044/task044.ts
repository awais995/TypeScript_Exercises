// Exercise 44


// Making Sandwiches

// used a rest parameter syntax which accepts number of string arguments.
function make_Sandwich(...item:string[]){  
    console.log(`Items Required to make Sandwich`);
    item.forEach(item =>{
        console.log("-", item);
    });
    console.log(`Have a delicious sandwich.`);
}

make_Sandwich("Bread","meat","Tomato","Sauses");
make_Sandwich("Veg", "tomato", "cucumber", "pickles");
make_Sandwich( "Egg","Tomato", "Red Onion", "Pickles" ,"Sauces");

