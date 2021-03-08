// maps are not objects !!
// maps stores key-value pair !!

let myMap = new Map();


// default setter
myMap.set(1, "Uno")
myMap.set(2, "dos")
myMap.set(3, "tres")
myMap.set(4, "quatro")
                                // key and value can be any literal
// myMap.set("one", "Uno")
// myMap.set("two", "dos")
// myMap.set("three", "tres")
// myMap.set("four", "quatro")

console.log(myMap);

// geting values out of the map:

for(let key of myMap.keys()) {
    console.log(`Keys are ${key}`);
}

for(let value of myMap.values()) {
    console.log(`Values are ${value}`);
}

// to print both at once:

for(let [key, value] of myMap) {
    console.log(`Key is: ${key} and value is: ${value}`);
}

// myMap.forEach((key) => {console.log(key)})   // this gives us the values instead of keys !! 
                                                // this loop is designed in a way of only dealing with values not indexes

myMap.forEach((value) => {console.log(value);}) // this is the write naming convention for this :)

myMap.forEach((v, k) => {console.log(`${v} ${k}`);})  // In forEach loop first comes the value, then the index

// forOf loop will always gona give you key first !!
// forEach loop will always gona give you value first !!

myMap.delete(2);    // this will delete the element at the given index
console.log(myMap);