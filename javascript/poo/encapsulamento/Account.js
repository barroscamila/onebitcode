class Account {
    #password
    #balance = 0
    constructor(user) {
        this.email = user.email
        this.#password = user.password
        // this.#balance = 0
    }

    //metodo para conseguir ler o balance de forma segura, por exemplo
    getBalance(email, password) {
        if (this.#authenticate(email, password)) {
            return this.#balance
        } else {
            return null
        }
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }
}

const user = {
    email: 'camila@email.com',
    password: '12345678'
}

const myAccount = new Account(user)
console.log(myAccount)


// // nao eh o mesmo de #password e #balance, se tentar inserir myAccount.#password o vscode nao permite
// myAccount.password = "88888"
// myAccount.balance = 9999999
// console.log(myAccount)

console.log(myAccount.getBalance("camila@email.com", "12345678"))




