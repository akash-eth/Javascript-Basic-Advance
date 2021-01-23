var states = [
    "rajasthan",
    "delhi",
    "assam",
    "tamil nadu",
    1947,
    "maharastra",
    "goa",
    "kerela"
    
]

for (let i=0; i< states.length; i++) {
    if (typeof states[i] !== "string") {
        //console.log("A number found");
        continue;
    };
    //console.log(states[i]);
}


//using for each loop in JS
var newResult = states.forEach((s) => {console.log(s);})