let temperatureConverter = function(degreeInFahrenheit) {
    let temperatureInCelsius = (degreeInFahrenheit - 32) * 5/9;
    let temperatureInKelvin = (degreeInFahrenheit -32) * 5/9 + 273.15;
    return {
        degreeInCelsius: `${degreeInFahrenheit} fahrenheit is ${temperatureInCelsius} in celsius`,
        degreeInKelvin: `${degreeInFahrenheit} fahrenheit is ${temperatureInKelvin} in celsius`
    }
}

let result = temperatureConverter(90);
console.log(result.degreeInCelsius);
console.log(result.degreeInKelvin);
