let calculateTip = (amount) => {
    if(typeof(amount) === 'number') {
        return amount * 0.25
    }
    else {
        throw Error('Please a integer in your argument')
    }
}

// let result = calculateTip(100);
// console.log(result);

// using try-catch:
try {
    let result = calculateTip('100');
    console.log(result);    
} catch (e) {
    console.log('Catch block is running');
}