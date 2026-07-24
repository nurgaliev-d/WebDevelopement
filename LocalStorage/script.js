// //Task1
// localStorage.setItem('greet', "Hello");
// const greeting = localStorage.getItem('greet')
// console.log(greeting)

// //Task2
// localStorage.removeItem('greet')
// const greetingAfterDeleting = localStorage.getItem('greet')
// console.log(greetingAfterDeleting) //output: null

// //Task3
// let person = {
//     name: "Dias",
//     age: 21,
//     city: "Kyzylorda"
// }

// const personJSON = JSON.stringify(person)
// localStorage.setItem('person', personJSON)
// const storedPerson = localStorage.getItem('person')
// const parsedPerson = JSON.parse(storedPerson)
// console.log(parsedPerson)
// localStorage.removeItem('person')
// //Task4
// person.country = "Kazakhstan"
// const personJSON2 = JSON.stringify(person)
// localStorage.setItem('person', personJSON2)
// const storedPerson2 = localStorage.getItem('person')
// const parsedPerson2 = JSON.parse(storedPerson2)
// console.log(parsedPerson2)

// //Task5
// let users = [
//     {name: 'Dias', age: 21, city: 'Kyzylorda'},
//     {name: 'Asel', age: 23, city: 'Kyzylorda'},
//     {name: 'Nurbek', age: 21, city: 'Almaty'}
// ]

// localStorage.setItem('users', JSON.stringify(users))

// let storedUsers = localStorage.getItem('users')
// let parsedUsers = JSON.parse(storedUsers)

// let userName = prompt('Who are you looking for?')

// let foundUser = parsedUsers.find((user) => user.name === userName)

// if (foundUser) {
//     console.log(foundUser)
// } else {
//     let newUser = {
//         name: userName
//     }

//     parsedUsers.push(newUser)

//     localStorage.setItem('users', JSON.stringify(parsedUsers))

//     console.log('New user added:', newUser)
// }

//Task6
let fruits = ['apple', 'banana', 'pear']
const fruitsJSON = JSON.stringify(fruits)
localStorage.setItem('fruits', fruitsJSON)
const storedFruits = localStorage.getItem('fruits')
const parsedFruits = JSON.parse(storedFruits)
localStorage.clear()

const storedFruits2 = localStorage.getItem('fruits')
const parsedFruits2 = JSON.parse(storedFruits2)

console.log(`Before deleting: ${parsedFruits}`)
console.log(`After deleting: ${parsedFruits2}`)

//Task7
let toDoList = [
    {title: 'Math', completed: false},
    {title: 'Reading a book', completed: false},
    {title: 'Washing a car', completed: false},
    {title: 'Time for coding', completed: true},
    {title: 'Watch TV series', completed: true}
]
const listJSON = JSON.stringify(toDoList)
localStorage.setItem('toDoList', listJSON)
const storedList = localStorage.getItem('toDoList')
const parsedList = JSON.parse(storedList)
console.log(parsedList)

let orderedList = document.getElementById('orderedList')
parsedList.forEach(item => {
    let listItem = document.createElement('li')
    listItem.textContent = `${item.title} - ${item.completed}`
    orderedList.append(listItem)
});

//Task8
let itemsOfTheList = document.querySelectorAll('#orderedList li');

itemsOfTheList.forEach((item, index) => {
    item.addEventListener('click', () => {
        parsedList[index].completed = !parsedList[index].completed;

        localStorage.setItem('toDoList', JSON.stringify(parsedList))

        item.textContent = `${parsedList[index].title} - ${
            parsedList[index].completed
                ? 'Completed'
                : 'Not completed'
        }`;

        console.log(parsedList[index].title);
        console.log(parsedList[index].completed);
    });
});
