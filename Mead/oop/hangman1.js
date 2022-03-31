let Hangman = function(word, guessCount) {
    this.word = word.toLowerCase().split('')
    this.guessCount = guessCount
    this.getPuzzle = ['d', 's']
}

Hangman.prototype.createPuzzle = function() {
    let output = ''
    this.word.forEach((item) => {
        if(this.getPuzzle.includes(item) || item === ' ') {
            output += item
        }
        else {
            output += "*"
        }
    })
    return output
}

let guess1 = new Hangman('dog is love')
console.log(guess1.createPuzzle());