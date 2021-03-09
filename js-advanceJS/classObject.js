const User = require("./classJS.js")

let akash = new User("akash", "akash@dev")

console.log(akash.enrollCourse("DSA"));
console.log(akash.enrollCourse("MERN"));

console.log(akash.getCourseList());

let courses = akash.getCourseList();
courses.forEach(c => {console.log(c);})     // here we are dumping values outside the array !!

console.log((courses.length));