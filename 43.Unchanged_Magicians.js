// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

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
for (let i = 0; i < array.length; i++) {
    showMagicians(array[i])
}