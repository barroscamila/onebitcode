function dividir(num) {
    console.log(num)
    if (num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num
    }
}

dividir(256)

/* 
    Efeito pilha: 
        Primeira -> Segunda -> Terceira -> Quarta...
        A terceira função só encerra se a quarta finalizar, e assim por diante.
*/

function dobrar(num) {
    console.log(num)
    dobrar(num * 2)
}

//dobrar(1) 
// --> É PRECISO TER UM MOMENTO EM QUE A FUNÇÃO IRÁ PARAR DE CHAMAR ELA MESMO, SE NÃO ENTRARÁ EM UM ERRO/LOOP INFINITO

// ----------------------------

function fatorial(num) {
    console.log("Número: " + num)
    if (num === 0) { // caso base
        return 1
    } else if (num === 1) {
        return 1
    } else {
        console.log(num + " * !" + (num - 1))
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))
