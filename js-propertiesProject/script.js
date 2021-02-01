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

console.log(getBackGroundColor(pink));