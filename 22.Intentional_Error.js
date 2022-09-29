// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let mountains = ["Denali", "Mount Kilimanjaro"];
let rivers = ["Nile", "Amazon", "Chang Jiang"];
let countries = ["Germany", "Turkey", "Iran"];
let cities = ["Berlin", "Istanbul", "Tabraiz"];
let languages = ["Urdu", "English"];
let list = mountains.concat(rivers, countries, cities, languages);
console.log(list);
console.log(list[16]); // Hence index 16 is missing it will give undefined