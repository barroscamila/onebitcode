function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada...')
        setTimeout(() => {
            if (false) {
                reject('A promise foi rejeitada')
            } else {
                console.log('Resolvendo a promise...')
                resolve(42)
            }
        }, 1000 * 2)
    })
}

// const p = execute()

// then --> lidar com a promisse resolvida. O parâmetro 'result' é o resultado da promise (resolve)
// catch --> tratar a rejeição da promisse. O parâmetro 'err" é o resultado da promise (reject)
// finally --> seja resolvida ou rejeitada, o finally será executada para finalizar a promise

execute().then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada! Motivo: ${err}`)
}).finally(() => {
    console.log('A promise foi finalizada')
})

