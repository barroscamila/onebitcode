function exibirMenu() {
    let opcao = prompt(
        "Bem vindo ao Sistema de Seleção de Vagas!\n" +
        "O que deseja fazer?\n\n" +
        "1. Listas vagas disponíveis\n" +
        "2. Criar uma nova vaga\n" +
        "3. Visualizar uma vaga\n" +
        "4. Inscrever um candidato em uma vaga\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair"
    )
    return opcao
}

function listarVagas() {
    if(vagas.length === 0) {
        alert("Não há vagas disponíveis no momento.")
    } else {
        vagas.forEach(function (vagas) {
             alert(
                "\nNome da vaga: " + vagas.nome +
                "\nDescrição: " + vagas.descricao +
                "\nData limite para se candidatar: " + vagas.data 
            )
        })
    }
}

function criarVaga() {
    let nomeNovaVaga = prompt("Nome da vaga:")
    let descricaoNovaVaga = prompt("Descrição da vaga:")
    let dataNovaVaga = prompt("Data limite para candidatura na vaga: [xx/xx/xxxx]")
    let novaVaga = {nome: nomeNovaVaga, descricao: descricaoNovaVaga, data: dataNovaVaga}
    let confirmar = confirm(
        "Confirma os dados abaixo?" +
        "\nNome da vaga: " + novaVaga.nome +
        "\nDescrição: " + novaVaga.descricao +
        "\nData limite para se candidatar: " + novaVaga.data 
    ) 
    if (confirmar) {
       vagas.push(novaVaga)
    } else {
        // ...
    }
   
}

function visualizarVaga() {

}

function inscreverCandidato() {

}

function excluirVaga() {

}

let vagas = []

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
                //alert(vagas.length)
                break
            case "3":
                break
            case "4":
                break
            case "5":
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

