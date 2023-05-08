const numerotxt = prompt('Digite um número de 1 a 20 para calcular a sua tabuada.')
const numero = parseFloat(numerotxt)

let tabuada = ""

for (let i = 1; i <= 20; i++) {
    tabuada += `-> ${numero} x ${i} = ${numero*i}\n`
}

alert(`Tabuada de ${numero}!!\n\n${tabuada}`)



