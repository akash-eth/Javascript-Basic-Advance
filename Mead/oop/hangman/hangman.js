let Hangman = function(word, guessCount) {
    this.word = word.toLowerCase().split('')
    this.guessCount = guessCount
    this.guessPuzzle = []
}

Hangman.prototype.createPuzzle = function() {
    let output = ''
    this.word.forEach((item) => {
        if(this.guessPuzzle.includes(item) || item === ' ') {
            output += item
        }
        else {
            output += "*"
        }
    })
    return output
}

Hangman.prototype.makeGuess = function(guess) {
    guess = guess.toLowerCase()
    let isGuessUnique = !this.guessPuzzle.includes(guess)
    let isBasGuess = !this.word.includes(guess)

    if(isGuessUnique) {
        this.guessPuzzle.push(guess)
    }
    if(isBasGuess) {
        this.guessCount--;
    }
}

let guess1 = new Hangman('You are alone in the ocean', 5)

window.addEventListener('keypress', (e) => {
    let key = String.fromCharCode(e.charCode)
    guess1.makeGuess(key)
    console.log(guess1.createPuzzle())
    console.log(guess1.guessCount);
})