//Task1
let fruits = ["Apple", "Banana", "Orange"]

console.log(fruits)

//Task2
console.log(fruits[0])
console.log(fruits[2])
fruits.push("Pear")
console.log(fruits)

// //Task3
// fruits.pop()
// fruits.shift()
// console.log(fruits)

//Task4
fruits.forEach(element => {
    console.log(element)
});

//Task5
let lengthArray = fruits.map(fruit => fruit.length)
console.log(lengthArray)

//Task6
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNumbers = numbers.filter(num => num % 2 == 0)
console.log(evenNumbers)

//Task7
let sum = numbers.reduce((counter, num) => {
    return counter + num
}, 0)

console.log(sum)

//Task8
let numMoreThanFive = numbers.find(num => num > 5)
console.log(numMoreThanFive)

//Task9
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let concattedArray = arr1.concat(arr2)
console.log(concattedArray)

//Task10
let isThereBanana = fruits.includes("Banana")
console.log(isThereBanana)

//Task11

console.log("Fruits array: ", fruits)
fruits.reverse()
console.log("Reversed fruits array: ", fruits)
