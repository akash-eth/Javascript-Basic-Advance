// Type coercion: You can coerc to a string, a number, a boolean

console.log('5' + 5); // this behaves as string concatenation
console.log('5' - 5); // this behaves as integer subtraction
console.log(5 === 5); // returns true (takes type in consideration)
console.log('5' == 5); // returns true (doesn't take type in consideration) - AVOID THIS WHILE COMPARING
// For above case we take ex. let say we want to perform MATH operations if it is a number..so, we need to make type check
console.log('5' === 5); // returns false

// So, we can also use TypeOf() to check the variable type:
typeof(123)
typeof({});

// Example:
let value = true + 12 // as true is 1, so it will give 13
console.log(typeof(value));
console.log(value);