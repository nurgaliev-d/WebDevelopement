//Task1
let paragraph = document.getElementById('message')
paragraph.textContent = 'Welcome!'
console.log('changed')

//Task2
let boxes = document.getElementsByClassName('box')
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = 'blue'
}

//Task3
let p = document.querySelector('#text')
p.textContent = 'New text'

let divs = document.querySelectorAll('.box')
for (let x = 0; x < divs.length; x++) {
    divs[x].style.backgroundColor = 'green'
}

//Task4
let highlightedParagraphs = document.querySelectorAll('.highlight')
highlightedParagraphs.forEach((paragrapgh) => (paragrapgh.style.color = 'red'))
