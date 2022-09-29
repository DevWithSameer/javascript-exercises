// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const guestList = ["Sameer", "Shayan", "Nameer"];
for (let i = 0; i < guestList.length; i++) {
  let inviteMsg =
    "Heyy " + guestList[i] + " you are invited for dinner at our house";
  console.log(inviteMsg);
}
