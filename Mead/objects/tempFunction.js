let calculateTemperature = function(tempInFerhenite) {
    let tempInCelcius = (tempInFerhenite - 32)*5/9;
    let tempInKelvin = (tempInFerhenite - 32)*5/9 + 273;

    return {
        degreeFerhenite: `${tempInFerhenite}`,
        degreeCelcius: `${tempInCelcius}`,
        degreeKelvin: `${tempInKelvin}`
    }
}

let finalTemp = calculateTemperature(60);
console.log(finalTemp);