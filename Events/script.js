//Task1(completed)
//Task2
let jsButton = document.getElementById('jsButton')
jsButton.addEventListener('click', () => {
    console.log('Событие обработано через JS')
})

//Task3
let myDiv = document.getElementById('myDiv')
myDiv.addEventListener('click', () => {
    myDiv.style.backgroundColor = 'blue'
})

myDiv.addEventListener('mouseover', () => {
    console.log('Mouse over the div')
})

//Task4
let textInput = document.getElementById('textInput')
textInput.addEventListener('keydown', (event) => {
    console.log(`Tapped: ${event.key}`)
})

//Task5
let myLink = document.getElementById('myLink')
myLink.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Link click prevented')
})

//Task6
//1st method
let list = document.getElementById('list')
list.addEventListener('click', (event) => {
    console.log(event.target.textContent)
})

//2nd method
// let listItems = document.querySelectorAll('#list li')
// listItems.forEach((item) => {
//     item.addEventListener('click', (event) => {
//         console.log(`Clicked on: ${event.target.textContent}`)
//     })
// })


//Task7
let input = document.getElementById('keyboardInput')

input.addEventListener('keydown', function(event) {
    console.log(event.code)
})
