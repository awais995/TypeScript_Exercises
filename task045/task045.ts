// Exercise 45
// Used interface for creating custom object
interface Car {
    Manufacturer: string,
    Model: string,
    Features: string
    Year?: number,
    color?: string,
}
// Declare a function and pass the object values to a function
function Car_Details(Manufacturer: string, Model:string, Features:string, Options:{Year:number, color:string}): Car{
    let fav_car: Car = {   // store a data in a variable
        Manufacturer,
        Model,
        Features,
        ...Options
    }

    return fav_car  // return a function
}

// call the function with required information and stored it in a variable.
let fav_car = Car_Details("Toyota", "V8", "Automatic", {Year:2024 , color: "White"})
console.log(fav_car);