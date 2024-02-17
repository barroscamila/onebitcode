function imc(weight, height) {
    return new Promise((resolve, reject) => {
        if (typeof weight !== 'number' || typeof height !== 'number') 
            reject('argumentos must be of type number')
        else 
            resolve(weight / (height ** 2))
    })
}

function showImc(weight, height) {
    imc(weight, height).then((result) => {
        console.log(`O resultado do IMC foi de ${result}.`)

        if (result < 18.5) console.log('Situação: MAGREZA')
        else if (result < 25) console.log('Situação: NORMAL')
        else if (result < 30) console.log('Situação: SOBREPESO')
        else if (result < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')
    }).catch((err) => {
        console.log(err)
    })

    console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`)
}

showImc(60, 1.57)
showImc(50, 1.60)
showImc(90, 'texto')
showImc(55, 1.57)
showImc(80, 1.55)

// a rejeição é mostrada por ultimo no console log, primeiro aparece os resultados das promises que foram resolvidas com sucesso
