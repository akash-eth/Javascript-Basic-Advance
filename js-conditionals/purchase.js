// when a user is allowed to pusrchase a product?
// 1. He is looged In
// 2. email verified
// 3. cardInfo-valid
// if any of this is missing then, stop purchase



var userName = "Akash Bhardwaj";

var email = "abc@mail.com";

var cardInfo = "1328enecbw";

var isUserLoggedIn = true;

var isCardInfoValid = false;

var isEmailVerified = true;

// if (isUserLoggedIn) {
//     console.log("Logged in successful");
//         if(isEmailVerified){
//             console.log("email is verfified");
//         }
//             if(isCardInfoValid){
//             console.log("You are allowed to purchase the product")
//         }
    
// }

if (isUserLoggedIn && isCardInfoValid && isEmailVerified) {
    console.log("You are allowed to make an purchase");
}
else {
    console.log("You aren't allowed make a purchase");
}
