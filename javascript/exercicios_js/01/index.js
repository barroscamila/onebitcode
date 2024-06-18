alert('Bem-vindo! A seguir pediremos que informe alguns dados.')

const nome = prompt('Por gentileza, insira o seu nome.')

const idade = prompt('Qual a sua idade?')

const confirmacaoIdade = confirm(`Por gentileza, conforme a sua idade: ${idade} anos.`)

let confirmacao = ""
if (confirmacaoIdade == true) {
    confirmacao = "Sim"
} else {
    confirmacao = "Não"
}

alert(`Nome: ${nome}.\nIdade: ${idade} anos.\nIdade confirmada: ${confirmacao}.`)


