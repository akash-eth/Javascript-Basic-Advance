var courses = [
    {
        name: "reactJS",
        price: "$2.1"
    },
    
    {
        name: "angularJS",
        price: "$4.0"
    },
    
    {
        name: "MERN",
        price: "$3.2"
    },
    
    {
        name: "C++",
        price: "$2.7"
    }
]

// function generateList() {
//     const ul = document.querySelector(".list-group"); // this queries to the list-group id
//     courses.forEach((course) => {   // looping through each value of courses
//         const li = document.createElement("li")     // this makes "<li> </li>" for us
//         li.classList.add(".list-group-item")    // this adds class inside the li. <li class="list-group-items"> </li> 

//         const name = document.createTextNode(course.name)
//         li.appendChild(name)

//         const span = document.createElement("span")
//         span.classList.add("float-right")

//         const price = document.createTextNode(course.price)
//         li.appendChild(price)
//     })
// }

function generateList() {

    const ul = document.querySelector(".list-group");
    // ul.innerHTML = "";
    courses.forEach((course) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name)
        li.appendChild(name)

        let span = document.createElement("span")
        span.classList.add("float-right")
        let price = document.createTextNode(course.price)
        span.appendChild(price)

        li.appendChild(span)    // earlier span was standAlone outside li. Now, we have injected it inside li
        ul.appendChild(li)      // earlier li was standAlone outside our ul. Now, we have injected it inside ul
    })

}

// generateList()

window.addEventListener("load", generateList)   // this will work same as line 61...




const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    courses.sort((a,b) => a.price - b.price);
    generateList();
})