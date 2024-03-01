// Exercise 44
// Making Sandwiches
// used a rest parameter syntax which accepts number of string arguments.
function make_Sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Items Required to make Sandwich");
    item.forEach(function (item) {
        console.log("-", item);
    });
    console.log("Enjoy your sandwich.");
}
make_Sandwich("Bread", "meat", "Tomato", "Sauses");
make_Sandwich("Veg", "tomato", "cucumber", "pickles");
make_Sandwich("Egg", "Tomato", "Red Onion", "Pickles", "Sauces");
