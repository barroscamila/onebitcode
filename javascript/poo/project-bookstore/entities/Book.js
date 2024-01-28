const Product = require("./Product");

module.exports = class Book extends Product {
    constructor(tittle, synopsis, genre, pages, author, description, price, inStock = 0) {
        super(`Livro: ${tittle}`, description, price, inStock)
        this.tittle = tittle
        this.synopsis = synopsis
        this.genre = genre
        this.pages = pages
        this.author = author
    }
}

