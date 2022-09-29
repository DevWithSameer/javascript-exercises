// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let names = [];
if (names.length !== 0) {
  for (let i = 0; i < names.length; i++) {
    if (names[i] == "Admin")
      console.log(
        "Hello " + names[i] + ", would you like to see a status report?"
      );
    else if (names[i] !== "Admin")
      console.log("Hello " + names[i] + " thank you for logging in again");
  }
} else {
  console.log("We need to find some users!");
}
