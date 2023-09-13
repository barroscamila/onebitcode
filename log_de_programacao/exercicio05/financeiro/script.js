let saldo = prompt('Informe o saldo inicial de dinheiro:')
saldo = parseFloat(saldo)
let res = ''

do {
    res = prompt(`Saldo disponível: R$ ${saldo}.\n\nO que deseja fazer?\n1. Adicionar dinheiro.\n2. Remover dinheiro.\n3. Sair.`)
    switch (res) {
        case "1":
            saldo += parseFloat(prompt('Informe o valor a ser adicionado.'))
            break
        case "2":
            saldo -= parseFloat(prompt('Informe o valor a ser removido.'))
            break
        case "3":
           alert('Você escolher Sair. Saindo...')
           break 
        default:
            "opção inválida."
    }
} while (res !== '3')
