const vagas = []

function listarVagas() {
    if (vagas.length === 0) {
        alert("Não há vagas disponíveis no momento.")
    } else {
        const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
            textoFinal += indice + ". "
            textoFinal += vaga.nome
            textoFinal += " (" + vaga.candidatos.length + " candidatos).\n "
            return textoFinal
        }, "")
    
        alert(vagasEmTexto)
    }
}
    
    

function criarVaga() {
    const nome = prompt("Nome da vaga:")
    const descricao = prompt("Descrição da vaga:")
    const dataLimite = prompt("Data limite para candidatura na vaga: [dd/mm/aaaa]")
    
    const confirmar = confirm(
        "Confirma os dados da vaga a ser criada?" +
        "\nNome: " + nome +
        "\nDescrição: " + descricao +
        "\nData limite para se candidatar: " + dataLimite
    ) 

    if (confirmar) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: []} // nome: nome, ...
        vagas.push(novaVaga)
        alert("Vaga criada.")
     }
}

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir:")

    if (indice >= vagas.length || indice < 0) {
        alert("Índice inválido.")
        return  // serve para encerrar a função, e aí volta ao menu
    } 

    const vaga = vagas[indice]
    
    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal += "\n - " + candidato
    }, "")

    alert(
        "Vaga nº " + indice + 
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nNúmero de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o índice da vaga para qual o(a) candidato(a) deseja se inscrever:")
    const vaga = vagas[indice]

    const confirmar = confirm(
        "Deseja inscrver o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " +  vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmar) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que você deseja excluir:")
    const vaga = vagas[indice]

    const confirmar = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " +  vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmar) {
        vagas.splice(indice, 1) 
        alert("Vaga excluída.")
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Bem vindo ao Sistema de Seleção de Vagas!\n\n" +
        "O que deseja fazer?\n" +
        "1. Listar vagas disponíveis\n" +
        "2. Criar uma nova vaga\n" +
        "3. Visualizar uma vaga\n" +
        "4. Inscrever um candidato em uma vaga\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair"
    )

    return opcao
}

function executar() {
    let opcao = "" // é preciso criar a variável fora do loop, se não o do while não ficará repetindo

    do {
        opcao = exibirMenu()
        
        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                criarVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Você escolheu sair. Encerrando...")
                break
            default:
                alert("Opção inválida. Escolha uma das opções disponíveis no menu.")
        }
    } while (opcao !== "6")
}

executar()

