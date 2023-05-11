let pessoa = {
    nome: "Camila",
    idade: 25,
    dizerOla() {
        console.log("Olá, Mundo! Meu nome é " + this.nome + "!")
    }
}

// Utilizar o '.this' para referenciar à chaves do prórpio objeto, dentro do método

console.log(pessoa)

pessoa.dizerOla()