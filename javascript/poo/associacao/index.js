// const Address = require("./Address")
const Person = require("./Person")

// const addr = new Address("7 de Setembro", 99, "Centro", "São Fidélis", "RJ")
const john = new Person("Jhon Doe", "7 de Setembro", 99, "Centro", "São Fidélis", "RJ")

console.log(john)
console.log(john.address.fullAddress())


