// functions that are used with "new" keyword are constructor function
// Important note: "new" is not available for arrow functions:
    /*
        Functions created with the function keyword are constructors, as are some built-in functions such as Date. These are the functions you can use with new.
        Other function objects do not have a [[Construct]] internal method. These include arrow functions. So you can't use new with these. This makes sense since you can't set the this value of an arrow function.
        Some built-in functions are also not constructors. E.g. you can't do new parseInt().
    */


let Person = function(firstname) {
    this.firstname = firstname
}

// let user = person();     --> this will throw undefined error

let user1 = new Person('akash');
let user2 = new Person('amit')
console.log(user1);
console.log(user2);

// --------------