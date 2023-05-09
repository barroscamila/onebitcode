let baralho = []
let opcao = ""

do {
    let listaBaralho = ""
    for (let i = 0; i < baralho.length; i++) {
        listaBaralho += "- " + baralho[i] + "\n"
    }

    opcao = prompt(
        `Cartas no Baralho: ${baralho.length}\nLista das cartas do Baralho:\n${listaBaralho}\nEscolha uma opção abaixo:\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair`
    )

    switch (opcao) {
        case "1":
            let cartaAdicionada = prompt("Qual a carta que você quer adicionar?")
            baralho.unshift(cartaAdicionada)
            break
        case "2": 
            let cartaRemovida = baralho.shift()
            if (cartaRemovida) {
                alert(`A carta "${cartaRemovida}" foi puxada do baralho.`)
            } else {
                alert("Não há cartas no baralho.")
            }
            break
        case "3":
            alert("Você escolheu sair. Encerrando...")
            break
        default:
            alert("Opção inválida.") 
    }
} while (opcao !== "3")