var counter = document.querySelector(".counter");
var follower = document.querySelector(".follower");

let count = 1;

setInterval(() => {
    if (count <= 1000)
    
    counter.innerHTML = count;
    count++;
}, 1);


setInterval(() => {
    follower.innerHTML = "Followers On Instagram";
}, 4800)