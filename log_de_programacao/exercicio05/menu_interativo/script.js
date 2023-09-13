let res = ""

do {
    res =  prompt('Menu interativo!\nEscolha uma opção abaixo:\n\na) Opção 1\nb) Opção 2\nc) Opção 3\nd) Opção 4\ne) Encerrar.')
    switch (res) {
        case "a":
            alert("Opção 1 escolhida!")
            break
        case "b":
            alert("Opção 2 escolhida!")
            break
        case "c":
            alert("Opção 3 escolhida!")
            break
        case "d":
            alert("Opção 4 escolhida!")
            break
        case "e":
            alert('Vocês escolheu encerrar.')
            alert('Encerrando...')
            break
        default:
            alert("Opção inválida... Escolha uma das alternativas do menu interativo.")
    }
} while (res !== "e")