// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const userName = "Sameer Ahmed";

console.log("LowerCase: " + userName.toLowerCase());
console.log("UpperCase: " + userName.toUpperCase());
titleCase(userName);

function titleCase(string) {
  var sentence = string.toLowerCase().split(" ");
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  console.log("TitleCase: " + sentence.join(" "));
  return sentence;
}
