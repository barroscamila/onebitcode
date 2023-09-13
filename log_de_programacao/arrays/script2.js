// OBSERVAÇÃO IMPORTANTE: Dados de tipos primitivos são passados como valor e os objetos são passados como referência.

const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// Adicionar elementos
// push (adiciona ao final; retorna o tamanho)
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)
// unshift (adiciona no início; retorna o tamanho)
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// Remover Elementos
// pop (remove o último elemento; retorna o elemento removido)
const ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)
// shift (remove o primeiro elemento; retorna o elemento removido)
const primeiroElemento = arr.shift()
console.log(arr)
console.log(primeiroElemento)

// Pesquisar por um elemento
// includes (retorna true/false)
const inclui = arr.includes("Gandalf")
console.log(inclui)
// indexOf (retorna o indice do elemento)
const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e concatenar
// slice (cria uma copia da parte cortada do array) 
const hobbits = arr.slice(0, 4) // a partir do 0, 4 elementos
const outros = arr.slice(-4) // -1 é o ultimo elemento
console.log(hobbits)
console.log(outros)
// concat (juntar dois arrays)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// Substituição dos Elementos
// splice (retorna, como array, o(s) elemento(s) removido(s))
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento", 1, 3, false, true) 
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os Elementos
for (let i = 0; i < sociedade.length; i++) {
    const elemento = sociedade[i]
    console.log(elemento + " se encontra na posição " + i)
}


