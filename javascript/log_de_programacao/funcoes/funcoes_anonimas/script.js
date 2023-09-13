
function somar(a, b) {
    return a + b
}

// para declarar funções como variáveis, não colocar os parênteses
let operacao = somar
console.log(operacao(4, 5))

// Não precisa de nome
operacao = function (a, b) {
    return a - b
}
console.log(operacao(4, 5))

// ---------------------------

olaMundo()
oiMundo()

function olaMundo() {
    console.log("Olá, Mundo!")
}

const oiMundo = function() {
    console.log("Oi, Mundo!")
}

// Assim como as variações criadas com o VAR, é possível acessá-la antes da sua inicialização. No entando, com as funções anônimas isso não é possível

//oiMundo()