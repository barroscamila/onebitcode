const arr = [
    "1º Nível",
    ["2º Nível", 42, true],
    [
        ["3º Nível, 1º Item", "Olá, Mundo!"],
        ["3º Nível. 2º Item", "Oi, Mundo!"],
    ],
    []
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][2]) // Acessa a posição 0 do array da posição 1 -> 'true'
console.log(arr[2])
console.log(arr[2][1][0]) // Acessa a posição 0 do array de posição 0 do array de posição 2 -> '3º Nível, 2º Item'

// ---------------------------

const matriz = [
    [1, 0, 0, 0], // 0
    [0, 1, 0, 0], // 1
    [0, 0, 1, 0], // 2
    [0, 0, 0, 1]  // 3
]

console.table(matriz) // O .table tenta exibir no console o array bidimensional em formato de matriz, se for possível

/*
// Adicionar elementos
matriz.push('Nova linha!')
matriz[0].push("Nova coluna!")

console.table(matriz)
*/

// Iterar a matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) { // nesse caso poderia ser matriz.length por ser uma matriz quadrada
        const elemento = matriz[i][j]
        console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
}