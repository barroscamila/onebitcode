const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

// --> MAP
// Percorre o array mapeando ele e criando um novo array, diferente do forEach

/*
    const nomes = []

    for (let i = 0; i < personagens.length; i++) {
        nomes.push(personagens[i].nome)
    }
*/

const nomes = personagens.map(function (personagem) {
    return personagem.nome
})

console.log(nomes)

// --> FILTER
// Filtra elementos de um array, seleciona os elementos e cria um novo array

/*
    const orcs = []

    for (let i = 0; i < personagens.length; i++) {
        if (personagens[i].raca === "Orc") {
            orcs.push(personagens[i])
        }
    }
*/

const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
})

console.log(orcs)

// --> REDUCE
// Permite transformar um array em um outro elemento (outro array, objeto, string...), criando esse novo elemento

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
}, {})

console.log(racas)

// --> SORT
// Serve para ordenar arrays, alterando o array original
// O sort trabalha fazendo comparação em pares e reordenando-os
// DICA: para não alterar o array original, podemos usar o slice():
//      personagens.slice().sort()

personagens.sort(function (a, b) {
    return a.nivel - b.nivel  
    // se (a - b) retornar positivo, eles trocam de posição
    // se (a - b) retornar negativo, as posições são mantidas
})

console.log(personagens)

personagens.sort(function (a, b) {
    return b.nivel - a.nivel  
    // ordem decrescente
    // se (a - b) retornar positivo, as posições são mantidas
    // se (a - b) retornar negativo, eles trocam de posição
})

console.log(personagens)