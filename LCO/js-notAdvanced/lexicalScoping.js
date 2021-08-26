function init() {
    var userName = "Akash";
    function sayHello() {
        console.log("Hello", userName);
    }
    sayHello();
}

init();

console.log(userName); // this will throw an error as userName is not defined outside the scope of init function !!