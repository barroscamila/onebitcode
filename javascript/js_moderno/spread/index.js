const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

// Passando vários parâmetros de uma única vez
console.log(...towns)


// Utilizando spread em apenas um elemento do objeto iterável
console.log(...towns[0])


// Clonando objetos iteráveis
const townsCopy = towns
townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno') 
console.log({ townsCopy, towns }) // 'townsCopy' e 'town' foram alteradas, pois o JS trabalha com referencias

const townsClone = [...towns] // criação de uma cópia do array, de fato, através do operador spread
townsClone.push('Aldebaran')
console.log({ towns, townsCopy, townsClone })


// Clonando objetos comuns
const townsObj = { ...towns }
const townsObjClone = { ...townsObj }
townsObjClone.test = 'Test'
console.log({ townsObj, townsObjClone })

// Exemplo: String --> Array
const nome = "Camila"
const nomeArr = [...nome]
console.log(nome, nomeArr)