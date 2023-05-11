/*
    (1) Variáveis declaradas fora das funções (escopo externo) podem ser utilizadas dentro das funções
    (2) No entando, variáveis declaradas dentro das funções (escopo interno) não podem ser utilizadas por fora 
*/

//Caso 1
let pokemon = "Charmander"

function evoluir() {
    pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

//Caso 2
function criarAnimal() {
    let animal = "Gato"
}

criarAnimal()
//console.log(animal)

// -----------------------------

function avaliarNota(nota) {
    if (nota > 60) {
        var aprovado = true
        let situacao = "Aprovado"
    } else {
        var aprovado = false
        var situacao = "Reprovado"
    }
    console.log(nota)
    console.log(aprovado)
    console.log(situacao) 
}

avaliarNota(83)
avaliarNota(49)
// O 'var' pode ser considerado em escopos mais externos (em ifs, while, etc...), por isso o uso dela não é recomendada, pode confundir a leitura do código

// -----------------------

console.log(nome)
console.log(sobrenome)

var nome = "Isaac"
let sobrenome = "Pontes"

console.log(nome)
console.log(sobrenome)
// A variável criada com 'var' é possível de ser acessada antes da sua inicialização, com o 'let' não é possível