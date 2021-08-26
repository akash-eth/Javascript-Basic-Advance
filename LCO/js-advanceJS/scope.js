console.log(name);      // calling the variable before intialization

//var name = "Akash";     // this gives an undefined. Undefined is good for frontend, but for backend we need an error to find the problem !!

let name = "Akash";     // this gives us an error, which we can resolve in our backend !!
                        // ReferenceError: Cannot access 'name' before initialization


// Another example of scope:

// if (true) {
//     var lastName = "Bhardwaj"
// }
// console.log(lastName);           // this doen't give us an error. And this is an wrong approach.

if (true) {
    let lastName = "Bhardwaj"
}
console.log(lastName);