const Database = require("./Database")
const User = require("./entities/User")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const Poster = require("./entities/Poster")
const Order = require("./entities/Order")

module.exports = class App {
    static #database = new Database()
    
    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find('users') // chave
    }

    createAuthor(name, nacionality, bio) {
        const author = new Author(name, nacionality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthors() {
        return App.#database.find('authors') 
    }

    createBook(tittle, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(tittle, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    addBook(bookName, quantity) {
        App.#database.addBooksToStock(bookName, quantity)
    }

    getBooks() {
        return App.#database.find('books')
    }

    createPoster(name, description, height, width, price, inStock) {
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }

    addPoster(posterName, quantity) {
        App.#database.addPostersToStock(posterName, quantity)
    }

    getPosters() {
        return App.#database.find('posters')
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)

        // atualizacao do estoque apos fechar pedido
        order.data.items.forEach(({ product, quantity }) => {
            if (product instanceof Book) {
                App.#database.removeBooksFromStock(product.name, quantity)
            } else if (product instanceof Poster) {
               App.#database.removePostersFromStock(product.name, quantity)
            }
        })
    }

    getOrders() {
        return App.#database.find('orders')
    }

    showDatabase() {
        App.#database.showStorage()
    }
}

