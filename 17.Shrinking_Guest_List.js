// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let guestList = ["Sameer", "Bilal", "Shumail"];
let names = guestList.pop();
guestList.push("Arham");
guestList.splice(0, 0, "Umar");
guestList.splice(3, 0, "Safeer");
guestList.push("Aqsa");
let name1 = guestList.pop();
let name2 = guestList.pop();
let name3 = guestList.pop();
let name4 = guestList.pop();
console.log(name1, "I am sorry I can’t invite you for dinner");
console.log(name2, "I am sorry I can’t invite you for dinner");
console.log(name3, "I am sorry I can’t invite you for dinner");
console.log(name4, "I am sorry I can’t invite you for dinner");
for (let i = 0; i < guestList.length; i++) {
  let inviteMsg =
    "Hey " +
    guestList[i] +
    "  you are still invited for dinner at our house";
  console.log(inviteMsg);
}
console.log("I can invite only two people for dinner.\nnew dinner table won’t arrive in time for the dinner\n"+ names + " can't able to make it to the dinner" );
