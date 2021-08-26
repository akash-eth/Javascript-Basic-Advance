// Back ticks i.e. `` are known as string literals

// var name = "akash"   // works fine
// var name = 'akash\'s'    // we need use a backslash to differ 's.

// To  resolve this issue we use backticks:

var name = `akash's`
var fullName = `${name} bhardwaj`
console.log(fullName);

// how string's depicts array:

console.log(fullName.charAt(1));    // gives char's position !!
console.log(fullName.endsWith("j")); // gives a bool !!
console.log(fullName.includes("bhar")); // string matching
console.log(fullName.toUpperCase());