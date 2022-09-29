// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList = ["Sameer", "Shayan", "Nameer"];
let name = guestList.pop();
guestList.push("Arham");
guestList.splice(0, 0, "Umar");
guestList.splice(3, 0, "Safeer");
guestList.push("Aqsa");
guestList.pop();
guestList.pop();
guestList.pop();
guestList.pop();
for (let i = 0; i < guestList.length; i++) {
  let inviteMsg =
    "Hey " +
    guestList[i] +
    " you are still invited for dinner at our house";
  console.log(inviteMsg);
}
console.log("The Number of people I am inviting is", guestList.length);
