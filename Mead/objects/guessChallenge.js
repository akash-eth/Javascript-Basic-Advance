let min = 1;
let max = 5;
let makeGuess = function(num) {
    let randomNumber = Math.floor(Math.random() * (max-min+1)) + min;
    if(num == randomNumber) {
        return true;
    }
    else {
        return false;
    }
}

console.log(makeGuess(3));