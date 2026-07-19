//1-task
let a = 15
const yearOfBirth = 2005

a = 20
//yearOfBirth = 2006 // This will throw an error because yearOfBirth is a constant and cannot be reassigned.

//2-task
/*  Переменные, созданные через var, видны во всей функции, даже если они объявлены внутри цикла или условия (блок кода), что часто приводит к случайным ошибкам.
    var позволяет создавать переменную с одинаковым именем много раз, что может запутать логику программы.
*/

//3-task
let number = 15
let string = 'Hello'
let isBoolean = true
let isUndefined
let isNull = null
let notANumber = NaN

console.log(typeof number) // number
console.log(typeof string) // string
console.log(typeof isBoolean) // boolean
console.log(typeof isUndefined) // undefined
console.log(typeof isNull) // object
console.log(typeof notANumber) // number

//4-task
let string1 = '210'
let number1 = 10

let stringToNumber = Number(string1) // Convert string to number
let numberToString = String(number1) // Convert number to string

console.log(stringToNumber) // 210
console.log(numberToString) // "10"

let isUndefined1
let isNull1 = null

console.log(String(isUndefined1)) // "undefined"
console.log(String(isNull1)) // "null"

console.log(Number(isUndefined1)) // NaN
console.log(Number(isNull1)) // 0

//5-task
let number2 = 13
console.log(String(number2)) // "13"
console.log(number2.toString()) // "13"

/*  Динамическая типизация в JavaScript означает, что переменные не имеют фиксированного типа, и их тип может изменяться в процессе выполнения программы.
    Это позволяет быть гибким, но также может привести к неожиданным результатам, если не учитывать типы данных.
*/

//6-task
let name = prompt('What is your name?')
let age = prompt('How old are you?')

console.log(`Hello ${name}, you are ${age} years old.`)
alert(`Hello ${name}, you are ${age} years old.`)