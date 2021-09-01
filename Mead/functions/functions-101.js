// temperature converter using functions

let fahrenheitToCelsius = function(degreeInFeren) {
    let degreeInCelsius = (degreeInFeren - 32) * 5/9;
    return degreeInCelsius;
}

let value = fahrenheitToCelsius(68);
console.log(value);