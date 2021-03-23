function uno() {
    console.log("I am one");
}

function dos() {

    setTimeout(() => {
        console.log("woooohooo");
    }, 3000)
    console.log("I am two");
}

function tres() {
    console.log("I am three");
}

uno();
tres();
dos();
