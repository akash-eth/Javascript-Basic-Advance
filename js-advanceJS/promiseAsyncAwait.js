const { rejects } = require("node:assert")
const { resolve } = require("node:path")

const uno = () => {
    return "I am one"
}

// const dos = () => {
//     setTimeout(() => {
//         return "I am two"        // gives us undefined!!
//     }, 3000)
// }

// to resolve the above problem we use promise:
const dos = () => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve("I am two")
        }, 3000)
    }) 
}       // now add async and await inside our callMe function !!

const tres = () => {
    return "I am three"
}

const callMe = async () => {
    var valOne = uno();
    console.log(valOne);

    var valTwo = await dos();
    console.log(valTwo);

    var valThree = tres();
    console.log(valThree);
}

callMe()