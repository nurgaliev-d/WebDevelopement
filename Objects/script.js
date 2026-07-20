//Task1 
const person = {
    name:'Dias',
    age: 21,
    city: 'Kyzylorda',
    greet: function() {
        console.log(`Hi, my name is ${this.name}, I am ${this.age} years old and I live in ${this.city}.`)
    }
}

console.log(person)

//Task2
console.log(person.name)
console.log(person.age)
console.log(person.city)
person.city = 'Almaty'
console.log(person.city)

//Task3
person.greet()

//Task4
const obj1 = {a:10, b:20}
const obj2 = {a:10, b:20}

console.log(obj1 === obj2)
console.log(obj1 == obj2)
//they compare the references, not the values, so they are not equal

//Task5
const book = {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    details: {
        year: 1997,
        pages: 223
    }
}

const copiedBook = Object.assign({}, book)
copiedBook.details.year = 2000
console.log(book.details.year) // 2000
//The year property of the details object in the copiedBook object is changed to 2000, which also affects the original book object because they share the same reference to the details object. 

//Task6
const calculator = {
    a: 15,
    b: 5,
    sum: function() {
        return this.a + this.b
    },
    mmultiply: function() {
        return this.a * this.b
    }
}

console.log(calculator.sum())
console.log(calculator.mmultiply())

//Task7
const car = {
    brand: 'Toyota',
    model: 'Camry',
}

car.model = 'Corolla'
console.log(car.model) // 'Corolla'
//Const only prevents reassignment of the variable itself, but it does not make the object immutable. The properties of the object can still be modified.