class Wallet {
    #amount
    #username

    constructor() {
        this.#amount = 100.99 * 100 // 10099, regra interna do projeto apenas para salvar como inteiro 
    }

    get amount() {
        return this.#amount / 100
    }

    // amount() {
    //     return this.#amount / 100
    // }

    set username(newUsername) {
        if (typeof newUsername === 'string') {
            this.#username = newUsername
        } else {
            console.log('username must be of type string')
        }
        
    }

    get username() {
        return this.#username
    }
}

const myWallet = new Wallet()

console.log(myWallet.amount)
// console.log(myWallet.amount())

myWallet.username = 'camila'
console.log(myWallet.username)

myWallet.username += 'barros'
console.log(myWallet.username)

myWallet.username = true // nao altera a propriedade, apenas aparece o erro pois caiu no 'else'
console.log(myWallet.username) // mantem o valor anterior


