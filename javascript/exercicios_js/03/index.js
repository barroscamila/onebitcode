let nomePiloto = prompt("Qual o nome do piloto?")

let velocidade = 0

let velocidadeDesejada = prompt("Qual velocidade deseja atingir?  [km/h]")

let confirmacao = confirm(`Por gentileza, confirmar que devemos prosseguir para a velocidade ${velocidadeDesejada} km/h.`)

if (confirmacao) {
    velocidade = velocidadeDesejada
}

if (velocidade <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if (velocidade > 0 && velocidade < 40) {
    alert("Você está devagar, podemos aumentar mais.")
} else if (velocidade >= 40 && velocidade < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if (velocidade >= 80 && velocidade < 100) {
    alert("Velocidade alta! Considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado!")
}

alert(`Nome do piloto: ${nomePiloto}.\nVelocidade atual da nave: ${velocidade} km/h`)



