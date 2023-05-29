const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }
 
//console.log(user.friends[0].phone.ddd) // error

console.log(user.friends[0].phone?.ddd) // retorna undefined antes mesmo de ler a propriedade 'ddd'

//console.log(user.brothers[5].name) // error na leitura do '5'
console.log(user.brothers?.[5].name) 
  