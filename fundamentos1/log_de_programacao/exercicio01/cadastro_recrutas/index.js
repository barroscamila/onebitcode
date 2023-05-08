const primeiroNome = prompt('Digite o seu primeiro nome:')
const sobrenome = prompt('Agora, o seu sobrenome:')
const campoDeEstudo = prompt('Qual o seu campo de estudo?')
const anoDeNascimento = prompt('Em qual ano você nasceu?')

const idade = 2023 - anoDeNascimento

alert(
    'Recruta cadastrado com sucesso!\n' +
    `\nNome completo: ${primeiroNome + ' ' + sobrenome}.` +
    `\nCampo de Estudo: ${campoDeEstudo}.` +
    `\nIdade: ${idade} anos.`
)

