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
 
// console.log(user.friends[0].phone.ddd) 
// o JS ao tentar ler o phone irá retornar undefined, porém ao tentar ler o ddd retorna o erro "cannot read properties of undefined (reading 'ddd')""


console.log(user.friends[0].phone?.ddd) 
// se 'phone' for nullish, o JS retorna undefined antes mesmo de ler a propriedade 'ddd'


// console.log(user.brothers[5].name) // error na leitura do '5'
console.log(user.brothers?.[5].name) 
  