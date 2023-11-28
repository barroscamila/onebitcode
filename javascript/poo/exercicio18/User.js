class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(e, p) {
        if (e === this.email && p === this.password) {
            console.log("Login efetuado com sucesso.")
        } else {
            console.log("E-mail ou senha inválidos. Tente novamente.")
        }
    }
}

const loginCamila = new User("Camila Barros", "camilagdbarros@gmail.com", 12345678)

console.log(loginCamila)

loginCamila.login("camilagdbarros@gmail.com", 12345678)