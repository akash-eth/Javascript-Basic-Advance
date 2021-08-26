var names = ["akash", "amit", "hargobind", "aman"];

// for Off loops: Only used to iterate through arrays:
for(const n of names) {
    console.log(n);
}

// for In loops: Only used to iterate through objects:

var symbol = {
    ak: "akash",
    at: "amit",
    hg: "hargobind",
    mn: "aman"
}

for (const n in symbol) {
    //console.log(symbol[n]);
    console.log(`So, finally the key is ${n} and the value is ${symbol[n]}`);
}