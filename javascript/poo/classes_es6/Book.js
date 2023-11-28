class Book {
    // atributos
    constructor(title) {
        this.title = title
        this.published = false
    }
    
    //metodos
    publish() {
        this.published = true
    }
}

const eragon = new Book("Eragon")
const eldest = new Book("Eldest")

eragon.publish()

console.log(eragon)
console.log(eldest)

console.log(eragon instanceof Book) // verifica se a instância é de uma classe, retorna true ou false