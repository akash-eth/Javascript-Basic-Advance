let guessNumber = function(enterNumber) {
    // getting a random number
    let min = 0;
    let max = 20;
    let randomNumber = Math.floor((Math.random() * (max - min) + 1) + min);
    if(enterNumber >= 0 && enterNumber <=20) {
        if(enterNumber === randomNumber) {
            return `Congratulations!! ${enterNumber} is the correct guess!!`;
        } else {
            return `Please try again`;
        }
    } else {
        return `Please enter a num in range 0-20`;
    }
}

let userInput = guessNumber(15);
console.log(userInput);