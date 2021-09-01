/*
    let getScore = function(name, score) {
        console.log(name);
        console.log(score);
    }

    getScore() // it will give undefined for both the values
*/

/*
    let getScore = function(name='guest', score=0) {    // setting default values
        console.log(name);
        console.log(score);
    }
    getScore() // it will give guest and 0 as output values
*/ 

/*
let getScore = function(name='guest', score=0) {    // setting default values
        return 'Name: ' + name + ' Score: ' + score
    }
let score = getScore('andrew', 34) // it will give andrew and 34 as output values by overriding the default values
console.log(score);
*/

let getScore = function(name='guest', score=0) {    // setting default values
    return 'Name: ' + name + ' Score: ' + score
}
// passing undefined as argument !!
let score = getScore(undefined, 34) // it will give Anonymous and 34 as output values by overriding the default values
console.log(score);