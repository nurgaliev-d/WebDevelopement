//Task1
let number = prompt('Enter a number:')

if (number > 10) {
    console.log('The number is greater than 10.')
} else {
    console.log('The number is less than or equal to 10.')
}

//Task2
let confitmation = confirm('Delete this file?')

if (confitmation) {
    console.log('File deleted.')
} else {
    console.log('File not deleted.')
}

//Task3
let age = prompt('Enter your age:')

if (age < 18) {
    console.log('You are a teenager.')
} else if (age >= 18 && age < 35) {
    console.log('You are a young adult.')
} else if (age > 30) {
    console.log('You are an adult.')
}

//Task4
let c = prompt('Enter a number:')

console.log(c % 2 == 0 ? 'The number is even' : 'The number is odd')

//Task5 
let day = prompt('Enter a day of the week:')

switch (Number(day)) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Sunday')
        break
    default:
        console.log('Invalid day')
}

//Task6 
let firstNum = prompt('Enter the first number:')
let secondNum = prompt('Enter the second number:')

if (firstNum == secondNum) {
    console.log('The numbers are equal.')
} else {
    console.log(
        firstNum > secondNum ? 'The first number is greater than the second number.' : 'The second number is greater than the first number.')
}

//Dop zadanie
let month = prompt('Enter a month number (1-12):')

switch (Number(month)) {
    case 1:
    case 2:
    case 12:
        console.log('Winter')
        break
    case 3:
    case 4:
    case 5:
        console.log('Spring')
        break
    case 6:
    case 7:
    case 8:
        console.log('Summer')
        break
    case 9:
    case 10:
    case 11:
        console.log('Autumn')
        break
    default:
        console.log('Invalid month')
}