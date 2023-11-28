class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(q) {
        this.inStock += q
    }

    calculateDiscount(d) {
        return this.price * ((100 - d) / 100)
    }
}

const watch = new Product ("Relogio de Pulso", "...", 80)

watch.addToStock(99)

const priceWithDiscount = watch.calculateDiscount(15)

console.log(watch)
console.log(priceWithDiscount)