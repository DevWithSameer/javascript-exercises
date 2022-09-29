// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function showMagicians(name) {
    console.log(name)
}
function makeGreat(name) {
    showMagicians("The Great " + name)
}
let array = ["David Blaine", "Penn and Teller", "Jerry Sadowitz", "Dynamo", "Apollo Robbins"]
for (let i = 0; i < array.length; i++) {
    makeGreat(array[i])
}