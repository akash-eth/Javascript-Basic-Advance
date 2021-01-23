// allow user if:
// logged in from google, email, facebook


var isLoggedInFromGoogle = true;
var isLoggedInFromFacebook = true;
var isLoggedInFromEmail = true;

if (isLoggedInFromEmail || isLoggedInFromFacebook || isLoggedInFromGoogle) {
    console.log("Welcome to our website");
}
else {
    console.log("Please use a proper signup !!");
}