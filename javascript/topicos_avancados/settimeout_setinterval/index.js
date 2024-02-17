/*
//  Serve para criar um temporizador para executar algum bloco de código (o tempo é em milisegundos)

console.log('Programa iniciado!')

const timeoutId = setTimeout(() => {
    console.log('3 segundos se passaram desde que o programa foi iniciado.')
}, 1000 * 3)

// console.log(timeoutId)  // retorna um numero, como um 'identificador' desse TimeOut

clearTimeout(timeoutId)
*/


// diferente do Timeout, o setInterval ficará executando continuamente o código, de acordo com o intervalo especificado

let seconds = 0

const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos.`)
    if (seconds > 10) {
        clearInterval(intervalId)
        console.log('Tempo esgotado! Encerrando...')
    }
}, 1000 * 3)


    



