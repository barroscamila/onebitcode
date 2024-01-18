class Property {
    constructor(area, price) {
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter() {
        return this.price / this.area
    }
}

// o 'extends' é utilizado para especificar ra Herança
class House extends Property {

}

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)

console.log(land, land.getPricePerSquareMeter())
console.log(someHouse, someHouse.getPricePerSquareMeter())
console.log(someHouse instanceof Property)

class Apartment extends Property {
    constructor(apto, area, price) {
        super(area, price)  // chama a superclass para definir os atributos
        this.apto = apto
    }

    getFloor() {
        return this.apto.slice(0, -2)
    }
}

const apt = new Apartment("201", 100, 160000)
console.log(apt, apt.getFloor())