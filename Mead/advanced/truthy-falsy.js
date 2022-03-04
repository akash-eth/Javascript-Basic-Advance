// Truthy - values that resolve to TRUE in a boolean context
// Falsy - values that resolve to FALSE in a boolean context

// Truthy values: true, 'a string', a value
// Falsy values: false, 0, null, undefined, empty string

// Case-1
if('any text') { // truthy condition
    console.log('Truthy works');
} else { 
    console.log('Truthy fails');
}

// Case-2
if('') { // fasly condtion
    console.log('Truthy works');
} else {
    console.log('Falsy works');
}