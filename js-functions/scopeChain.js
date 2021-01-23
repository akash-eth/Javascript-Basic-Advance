var name = "Akash";
console.log("line number 2:" + name);


function myName() {
    console.log("line number 6:", name); // have taken the ice-cream(name) from the global var name. As it is bigger than myName.
}
myName();



function myTheName() {
    var name = "Akash";
    console.log("line number 14:", name); // Here both have there own ice-creams(i.e. var = name)

}
myTheName();

