var User = function (name, address) {  // this a normal function call inside a variable
    this.name = name,
    this.address = address
}


// now,

function sayHello() {
    console.log("hi");
    console.log("hello");
}

sayHello();

// now we will make it self executing function !!

(function () {
    console.log("hi");
    console.log("hello");
}) ();
