function sum(...numbers) {  
    return numbers.reduce((accum, num) => accum + num, 0)    
}

// o VSCode ja entende que é um array e permite métodos de arrays no 'numbers'

console.log(sum(1, 2))
console.log(sum(2, 2, 2, 2, 3, 5, 5, 3))
console.log(sum(10, 38, 911, 284))


