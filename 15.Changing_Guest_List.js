// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

const guestList = ["Sameer", "Shayan", "Nameer"];
guestList.pop();
guestList.push("Sameen");
for (let i = 0; i < guestList.length; i++) {
  let inviteMsg =
    "Heyy " + guestList[i] + " you are invited for dinner.";
  console.log(inviteMsg);
}
