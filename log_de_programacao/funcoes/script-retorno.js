// se não colocar o "return", o console irá retornar undefined

function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

const resultado = calcularMedia(7, 2)
console.log(resultado)

// ------------------------------------

function criarProduto(nome, preco) {
    const produto = {
        nome, // equivale a 'nome: nome'
        preco,
        estoque: 1
    }
    return produto
}

console.log(criarProduto("Notebook Intel Core i3 8GB", 2500))
//É possível colocar a função dentro do console.log também, e em outras funções

// -------------------------------------

function areaRetangular(base, altura) {
    return base * altura
}

function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}

console.log(areaQuadrada(9))

// ----------------------------------

function ola() {
    let texto = "..."
    return texto
    texto = "Olá, Mundo!"
    console.log(texto)
}

console.log(ola())
// IMPORTANTE: A função só retorna uma única vez. Após o return, a função encerra, ou seja, o return precisa ser a última linha de código da função

// ---------------------------------

//É possível utilizar mais de um return dentro da função, porém apenas um será executado (tudo após o return executado não será válido)

function maioridade(idade) {
    if (idade => 18) {
        return "Maior de idade!"
    } else {
        return "Menor de idade!"
    }
}

console.log(maioridade(29))
console.log(maioridade(13))