function init() {
    var userName = "Akash";
    function sayHello() {
        console.log("Hello", userName);
    }
    return sayHello; // here init isn't printing anything
}

var value = init(); 

value();        // this is our closure !!!


// another example:

function doAddition(x) {
    return function(y) {
        return x+y;
    }
}

var sum = doAddition(4); // this alone will not work for us. As, here sum only holds the value x.

// we have to pass a value inside summ itself to make the addtion work..
console.log(sum(5));

// we can also do one thing:
console.log(doAddition(2)(2)); // passing both the args at once

// doAddition()()(); // we can pass several () after doAddition as the function expands.
                    // this methodology is reffered to as CURRING.
