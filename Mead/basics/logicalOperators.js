// restaurent problem !!

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log("Only offer vegan dishes");
} else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log("Make sure to offer up some vegan dishes");
} else {
    console.log("can offer anything up from the menu");
}