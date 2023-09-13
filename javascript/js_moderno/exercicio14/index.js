// MEDIA ARITIMETICA SIMPLES

const avarage = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / (numbers.length)
}

console.log(`Média Aritimética Simples: ${avarage(3, 6, 10, 9)}.`)

// MEDIA ARITIMETICA PONDERADA

const weightAvarage = (...entries) => {
    const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
}

console.log(`Média Aritimética Ponderada: ${weightAvarage(
    { number: 9, weight: 3},
    { number: 7 },
    { number: 10, weight: 1 },
)}.`)

// MEDIANA

const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b) // colocando em ordem crescente
    const middle = Math.floor(orderedNumbers.length / 2)
    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    } else {
        // exemplo: [1, 2, 3, 4] -> pegando os elementos 2 e 3
        const firstMedian = orderedNumbers[middle - 1]
        const secondMedian = orderedNumbers[middle]
        return avarage(firstMedian, secondMedian)
    }
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}.`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}.`)

// MODA

 const mode = (...numbers) => {
    // [ [n, qntd], [n, qntd], ... ]
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0] // valor da posição 0 do array de posição 0
 }

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}.`)







