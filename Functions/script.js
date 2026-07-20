//Task1
function greet() {
     console.log('Hello World!')
}

greet()

//Task2 
let name = 'Dias'
let name2 = 'John'
let name3 = 'Doe'

function sayHello(someName) {
    console.log('Hello ' + someName + '!')
}

sayHello(name)
sayHello(name2)
sayHello(name3)

//Task3
let num1 = Number(prompt('Enter first number: '))
let num2 = Number(prompt('Enter second number: '))

function sum (number1, number2) {
    let result = number1 + number2
    console.log(result)
}

sum(num1, num2)

//Task4
let number3 = Number(prompt('Enter number to check if it is even or not'))

function isEven(number3) {
    if (number3 % 2 == 0) {
        console.log('Even number')
    } else {
        console.log('Odd number')
    }
}

isEven(number3)

//Task5
let maxFunctionResult = function max(number1, number2) {
    if (number1 == number2) {
        return 'They are equal1'
    } else if (number1 > number2) {
        return number1
    } else if (number1 < number2) {
        return number2
    }
}

console.log(maxFunctionResult(num1, num2))

//Task6
let fName = String(prompt('Enter your first name'))
let lName = String(prompt('Enter your last name'))

let initials = function getInitials(firstName, lastName) {
    return(firstName[0] + '.' + lastName[0] + '.')
}

console.log(initials(fName, lName))
console.log(initials('Dias', 'Khamitov'))
console.log(initials('John', 'Doe'))
console.log(initials('Jane', 'Smith'))

//Task7 
let number7 = Number(prompt('Enter yhe number for the task 7'))

function square(number) {
    return(Math.pow(number, 2))
}

console.log(square(number7))

function cube(number) {
    return(number ** 3)
}

console.log(cube(number7))

function squareUsedInCube(number) {
    return square(number) * number
}

console.log(squareUsedInCube(number7))

//Task8
const sumArrow = (number1, number2) => number1 + number2

console.log(sumArrow(num1, num2));

// Dopolnitelnoe zadanie
const getFactorial = (number) => {
    let result = 1;
    for (let x = 1; x <= number; x++) {
        result *= x;//explaining the same as result = result * x
    }
    return result;
}

console.log(getFactorial(5));
console.log(getFactorial(6));
console.log(getFactorial(7));
