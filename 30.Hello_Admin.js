// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let names = ["Admin", "Sameer", "Nameer", "Shayan", "Hamza"];
for (let i = 0; i < names.length; i++) {
  if (names[i] == "Admin")
    console.log(
      "Hello " + names[i] + ", would you like to see a status report?"
    );
  else if (names[i] !== "Admin")
    console.log("Hello " + names[i] + " thank you for logging in again");
}
