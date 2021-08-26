// var value = Math.max(2,4,6,8,9)
// console.log(value);

//const { lookup } = require("node:dns");

// var myObj = {}

// Object.assign(myObj, {a:1, b:2, c:3, d:4})
// console.log(myObj)


function sumUp(a, b) {
    return a + b;
}
var newSum = console.log(sumUp(5,4));

// but,

var myArray = [5,4]
// var arraySum = console.log(sumUp(myArray)); // 5,4undefined
console.log(sumUp(...myArray)) // this is spread Operator: it takes the group as Args and spread it into multiple values


//Now,
function sumMany(...args) {     // here, we use ...args, when we don't know the amount of inputs. To take multiple args(mostly args gona be an array)
    console.log(args); // [5,3,2], means that args stores indivual value into the array
    var sum = 0
    for (const arg of args) {
        sum = sum + arg;
    }
    return sum
}

console.log(sumMany(5,3,2)); // so, here you can pass unlimited args

//----------------------------------------------------------------------

function sumMany(a, b, ...args) {     // here, a and b are treated as separate args whereas all the arguments after that comes under args
    console.log(args); // [1,1,1], means that first 2 args are ignored
    let mul = a*b;
    var sum = 0
    for (const arg of args) {
        sum = sum + arg;
    }
    return [mul, sum]
}

console.log(sumMany(5,3,1,1,1)); // 1st two args gives us mul and rest are added
