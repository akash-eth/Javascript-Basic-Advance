// NOTE: this(keyword) always points to the window object in a regular function call.

console.log(this); //this will give us an empty window object

var user = {
    name: "Akash",
    courseCount: 24,
    getCourseCount: function() {
        console.log(this);
    }
}

user.getCourseCount();