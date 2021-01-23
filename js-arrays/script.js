var names = ["Akash","harish","hargobind"]
//console.log(names);

var states = new Array("rajasthan","maharastra","punjab","goa");
//console.log(states);

// console.log(states.length);
// console.log(states[3]);
// console.log(states.pop());


states.push("assam");
// console.log(states);

states.unshift("haryana");
//console.log(states);

states.shift();
console.log(states);

console.log(states.indexOf("punjab"));
console.log(states.indexOf("newyy")); // if this does not exist will return -1.
