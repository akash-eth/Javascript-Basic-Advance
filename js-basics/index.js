function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}



const circle1 = createCircle(1);