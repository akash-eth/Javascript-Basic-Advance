var checker = (number) => {
    return number%2 === 0;
}
//console.log(checker("34"));

//var result = [2,1,6,8].every(checker);
//console.log(result);

// more enhanced way of calling an Call-Back Function:
// var result = [2,4,6,8].every((element) => {
//     return element%2 === 0;
// })
// console.log(result);

// another easy on line way:

var result = [2,4,6,8].every((element) => element%2 === 0) //here we haven't used return and curlybraces !! 
console.log(result);                                        // whenever you use curlybraces you are bound to use return!!