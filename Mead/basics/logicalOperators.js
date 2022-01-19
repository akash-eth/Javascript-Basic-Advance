let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only serve vegan dishes');
} else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log('Please serve some vegan dishes as well');
} else {
    console.log('You can serve any thing from the menu');
}
