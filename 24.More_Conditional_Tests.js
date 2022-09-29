// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let String1 = "Hello";
let String2 = "World";

console.log(String1 == String2 ? "it is equal" : "unequal");
console.log(String1 == "Hello" ? "true" : "false");
console.log(String1 >= String2 ? "String1 is greater" : "String2 is greater");
console.log(String1 == "Hello" && String2 == "World" ? "true" : "false");
console.log(String1 == "Hello" || String2 == "Hello" ? "true" : "false");

let result = Array.isArray(String1);
console.log("string1 is Array", result);

String1.toLowerCase();
String2.toLowerCase();
console.log(String1 == String2 ? "it is equal" : "unequal");
