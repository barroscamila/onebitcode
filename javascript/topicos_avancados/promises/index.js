// pending --> estado inicial 
// resolved --> estado resolvido (executada com sucesso)
// rejected --> estado rejeitado (executada mas apresentou algum erro)

/*
const p = new Promise((resolve, rejected) => {
    console.log('A promise está sendo executada...')
    setTimeout(() => {
        if (true) {
            rejected(false)
        }
        console.log('Resolvendo a promise...')
        resolve(true)
    }, 1000 * 2)
})

console.log(p)

setTimeout(() => {
    console.log(p)
}, 1000 * 3)
*/

function execute() {
    // ...
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada...')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            resolve('Resultado')
        }, 1000 * 1)
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 1000 * 2)