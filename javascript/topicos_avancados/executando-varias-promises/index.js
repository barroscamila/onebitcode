/*
function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a + b)
        }
    })
}

function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a - b)
        }
    })
}

// o metodo .all() serve para executar varias promises juntas

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 33)
Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})

*/

const numbers = [4, 9, 5, 13, 77]

function asyncSquare(x) {
    return new Promise((resolve, reject) => {
        resolve(x ** 2)
    })
}

Promise.all(numbers.map(number => asyncSquare(number))) // o map está retornando um array de Promises
    .then( squares => console.log(squares)
)