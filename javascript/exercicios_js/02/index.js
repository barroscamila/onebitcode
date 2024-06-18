const ps1 = prompt('Nome da pessoa mais velha:')
const ps2 = prompt('Nome da pessoa mais nova: ')
const id1 = prompt('Idade da pessoa mais velha:')
const id2 = prompt('Idade da pessoa mais nova: ')

const diff = parseInt(id1) - parseInt(id2)

alert(`Pessoa mais velha: ${ps1}, ${id1} anos.\nPessoa mais nova: ${ps2}, ${id2} anos.\nDiferença de idade: ${diff} anos.`)