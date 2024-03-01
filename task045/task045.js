var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Declare a function and pass the object values to a function
function Car_Details(Manufacturer, Model, Features, Options) {
    var fav_car = __assign({ // store a data in a variable
        Manufacturer: Manufacturer, Model: Model, Features: Features }, Options);
    return fav_car; // return a function
}
// call the function with required information and stored it in a variable.
var fav_car = Car_Details("Toyota", "V8", "Automatic", { Year: 2024, color: "White" });
console.log(fav_car);
