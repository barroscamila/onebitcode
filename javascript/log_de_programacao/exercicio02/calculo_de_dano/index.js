const nomeAtaque = prompt('Digite o nome do personagem Atacante:')
const poderAtaque = prompt('Digite o poder de ataque desse personagem:')
const nomeDefesa = prompt('Digite o nome do personagem Defensor:')
let vidaDefesa = prompt('Digite a quantidade de pontos de vida do personagem:')
const poderDefesa = prompt('Digite o poder de defesa desse personagem:')
const escudoDefesa = prompt('O personagem possui um escudo? [S/N]')

let dano = 0

if (poderAtaque > poderDefesa && escudoDefesa === 'N') {
     dano = poderAtaque - poderDefesa
     vidaDefesa -= dano
} else if (poderAtaque >= poderDefesa && escudoDefesa == 'S') {
    dano = (poderAtaque - poderDefesa) / 2
    vidaDefesa -= dano
}

alert(
    `Dano: ${dano}!\n` +
    `\n${nomeAtaque} (Atacante):  ${poderAtaque} de poder.` +
    `\n${nomeDefesa} (Defensor): ${vidaDefesa} de vida e ${poderDefesa} de poder.`
)


