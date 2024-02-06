function sum(a, b) {
    const firstNumber = Number(a)
    const secondsNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondsNumber)) {
        throw new Error('arguments must be two numbers')
    }

    // quando o erro acontece, a função para de ser executada

    return firstNumber + secondsNumber
}

// o try + catch pode ser utilizado para lidar com o erro, uma forme de contornar o erro ("plano B")
// o finaly serve para encerrar o tratamento do erro
try {
    console.log(sum(2,9))
    console.log(sum(true, 14))
    console.log(sum(undefined, 22))
    console.log(sum(18, "0"))
    console.log(sum(39, null))
    console.log(sum(13, "zero"))
} catch (error) {
    console.log('An error ocorred!')
    // console.log(error) // mostra as informacoes do erro, padrão do JS
    console.log(error.message) // mostra apenas a mensagem do erro (trhow new Error())
} finally {
    console.log("Calculations finished!")
}

