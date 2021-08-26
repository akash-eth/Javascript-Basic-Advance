// NOTE: this(keyword) always points to the window object in a regular function call.

console.log(this); //this will give us an empty window object

var user = {
    name: "Akash",
    courseCount: 24,
    getCourseCount: function() {
        console.log(this);
        function sayHello() {
            console.log("Hello");
            console.log("Line 12", this);   // this is a regualr function call. So, this will call the point to the window object
        }
        sayHello()
    }
}

user.getCourseCount();