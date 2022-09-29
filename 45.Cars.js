// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function cars(manufacturer, name, color, feature) {
    let obj = {
        manufacturer: manufacturer,
        model_name: name,
        color: color,
        feature: feature
    }
    return obj

}
let obj1 = cars("Ford", "Focus", "red", "Electric power steering");
let obj2 = cars("Toyota", "Auris", "blue", "parking sensors all round");
let obj3 = cars("Volkswagen", "Golf", "green", "heated front seats");
console.log(obj1)
console.log(obj2)
console.log(obj3)