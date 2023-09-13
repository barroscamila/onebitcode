const name1 = prompt('Digite o nome do primeiro veículo:')
const vel1 = prompt('Digite a velocidade do primeiro veículo:')
const name2 = prompt('Agora, digite o nome do segundo veículo:')
const vel2 = prompt('Digite a velocidade do segundo veículo:')

if (vel1 > vel2) {
    alert(`${name1} é mais rápido do que ${name2}.`)
} else if (vel2 > vel1) {
    alert(`${name2} é mais rápido do que ${name1}.`)
} else {
    alert('As velocidades dos carros são iguais.')
}