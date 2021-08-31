/*
    1. *F to *C
    => formula: (*F - 32) * 5/9
    
    2. *F to *K
    => formula: (*F - 32) * 5/9 + 273.15
*/

let degreeFerenhite = 120;
let degreeCelcius = (degreeFerenhite - 32) * 5/9;
console.log(degreeCelcius);

let degreeKelvin = (degreeFerenhite - 32) * 5/9 + 273.15;
console.log(degreeKelvin);