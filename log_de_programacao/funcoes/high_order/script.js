/*
    //HOF -> Uma função que recebe outra função como parâmetro

    function calcular(a, b, operacao) {
        console.log("Realizando uma operação.")
        const resultado = operacao(a, b) // somar(3, 5)
        return resultado
    }


    function somar(x, y) {
        console.log("Realizando uma soma.")
        return x + y
    }


    console.log(calcular(3, 5, somar))

    console.log(calcular(8, 4, function (x, y){
        console.log("Realizando uma subtração")
        return x- y
    }) )
*/

function exibirElemento(elemento, indice, array) {
    console.log(
        elemento,
        indice,
        array
    )
}

const lista = ["Maça", "Banana", "Laranja", "Limão"]


for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
}


// .forEach é uma HOF que serve para exibir a função para cada da elemento do array. Percorre todos os itens de um array
lista.forEach(exibirElemento)


// Agora, tilizando função anônima:
lista.forEach(function(elemento, indice, array) {
    console.log(
        elemento,
        indice,
        array
    )
})