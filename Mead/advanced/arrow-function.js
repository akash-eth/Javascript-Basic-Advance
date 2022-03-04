let person = [
    {
        name: 'Akash',
        age: 23
    },
    {
        name: 'Amit',
        age: 25
    },
    {
        name: 'Andrew',
        age: 34
    }
]

let filterData = person.filter((item) => item.age === 25)

console.log(filterData);