// ao inserir 'async' antes da função, não é preciso mais criar uma Promise, já é criada automaticamente e o retorno da função será o "resolve"

/*
async function asyncSum(a, b) {
    return a + b
}

function asyncSubtract(a, b) {
    return a - b
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 33)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})
*/

const numbers = [4, 9, 5, 13, 77]

async function asyncSquare(x) {
    return x ** 2
}

Promise.all(numbers.map(number => asyncSquare(number))) // o map está retornando um array de Promises
    .then( squares => console.log(squares)
)
