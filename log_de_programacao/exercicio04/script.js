const nome = prompt('E aí, turista! Qual o seu nome?')

let res = prompt ('Você já visitou alguma cidade? [S/N]')

let cont = 0
let cidades = ''

//Poderia ter sido feito sem o IF

if (res === 'N') {
    alert(`O(a) turista ${nome} nunca visitou uma cidade.`)
} else {
    while (res === "S") {
        cont += 1
        let cidade = prompt('Qual o nome da cidade? ')
        cidades += "- " + cidade + "\n"
        res = prompt('Você já visitou alguma outra cidade? [S/N]')
    }  
    alert(
        `Nome do(a) turista: ${nome}.\n` +
        `Quant. de cidades visitadas: ${cont} cidades.\n` +
        `Cidades visitadas: \n` +
        `${cidades}`
    )
}









