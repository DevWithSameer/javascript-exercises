// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function showMagicians(name) {
    console.log(name)
}
let array = ["David Blaine", "Penn and Teller", "Jerry Sadowitz", "Dynamo", "Apollo Robbins"]
for (let i = 0; i < array.length; i++) {
    showMagicians(array[i])
}