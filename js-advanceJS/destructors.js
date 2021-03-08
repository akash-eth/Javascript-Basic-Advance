// destructoring means how to pick data.
// dataType in the right hand side should be same as dataType on the right hand side.


var user = ["akash", 3, "admin"];

// var role = user[2]    // avoid using this when using destructuring
// var name = user[0]

var [name, courseCount, role] = user; // LHS = RHS. i.e. array of size 3 = array of size 3.

console.log(courseCount);

var myUser = {
    newName: "Akash",
    newCourseCount: 4,
    newRole: "admin"
}

const {newName, newCourseCount, newRole} = myUser;  // parameters should also be same as assigned inside the obj
console.log(newName);