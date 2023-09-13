let number1txt = prompt('Insira o primeiro valor:')
let number2txt = prompt('Insira o segundo valor:')

let number1 = parseFloat(number1txt)
let number2 = parseFloat(number2txt)

let soma = number1 + number2
let subtracao = number1 - number2
let multiplicacao = number1*number2
let divisao = number1/number2

alert(
    `Números escolhidos: ${number1} e ${number2}\n` +
    `\nSoma: ${soma}` +
    `\nSubtração: ${subtracao}` +
    `\nMultiplicação: ${multiplicacao}` +
    `\nDivisão: ${divisao}`
)

// o \n serve para pular linha