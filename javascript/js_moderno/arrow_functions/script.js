function normalSum(a, b) {
    return a + b
}
console.log(`Soma normal: ${normalSum(2, 2)}`)


// Funções Anônimas

const anonymousSum = function (a, b) {
    return a + b
}
console.log(`Soma anônima: ${anonymousSum(2, 2)}`)


// Arrow Functions

const arrowSum = (a, b) => {
    return a + b
}
console.log(`Soma arrow function: ${arrowSum(2, 2)}`)

const subtract = (a, b) => a - b
console.log(`Subtração arrow function: ${subtract(2, 2)}`)

const double = n => `O dobro de ${n} é ${n * 2}`// quando só há um parâmetro, nem precisa colocar os parênteses
const number = 21
console.log(double(number))


// Exemplo prático utilizando arrow functions

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')

console.log(startingWithP)
