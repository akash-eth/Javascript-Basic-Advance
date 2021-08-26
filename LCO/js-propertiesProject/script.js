var red = document.querySelector(".red")
var cyan = document.querySelector(".cyan")
var violet = document.querySelector(".violet")
var orange = document.querySelector(".orange")
var pink = document.querySelector(".pink")

var center = document.querySelector(".center")


//console.log(window.getComputedStyle(red).backgroundColor);

var getBackGroundColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

//console.log(getBackGroundColor(pink));

// var color = getBackGroundColor(pink);


// pink.addEventListener("mouseenter", () => {
//     center.style.background = color;
// })

var magicBackgroundColor = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
        })
}

console.log(magicBackgroundColor(red, getBackGroundColor(red)));
console.log(magicBackgroundColor(cyan, getBackGroundColor(cyan)));
console.log(magicBackgroundColor(violet, getBackGroundColor(violet)));
console.log(magicBackgroundColor(orange, getBackGroundColor(orange)));
console.log(magicBackgroundColor(pink, getBackGroundColor(pink)));