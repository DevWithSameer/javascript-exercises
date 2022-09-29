// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let guestList = ["Sameer", "Bilal", "Shumail"];
let names = guestList.pop();
guestList.push("Arham");
guestList.splice(0, 0, "Umar");
guestList.splice(3, 0, "Safeer");
guestList.push("Aqsa");
for (let i = 0; i < guestList.length; i++) {
  let inviteMsg =
    "Heyy " + guestList[i] + " you are invited for dinner.";
  console.log(inviteMsg);
}
console.log("I found a bigger dinner table.");
console.log(names, "can't able to make it to the dinner");
