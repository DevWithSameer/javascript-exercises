// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name = prompt("Enter your name: ");

document.write("LowerCase: " + name.toLowerCase() + "<br>");
document.write("UpperCase: " + name.toUpperCase() + "<br>");
titleCase(name);

function titleCase(string) {
  var sentence = string.toLowerCase().split(" ");
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  document.write("TitleCase: " +sentence.join(" "));
  return sentence;
}