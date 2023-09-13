// na linha abaixo podemos utilizar const, pois serão modificados apenas os elementos do array e não será realizada uma nova atribuição a ele
const imoveis = [] 
let opcao = ""

do { 
    let qntdImoveis = imoveis.length

    opcao = prompt(`Bem vindo ao Cadastro de Imóveis!\nTotal de imóveis cadastrados: ${qntdImoveis}\n\nEscolha uma das opções abaixo:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair`)   

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o proprietário do imóvel:")
            imovel.quartos = prompt("Informe a quantidade de quartos do imóvel:")
            imovel.banheiros = prompt("Informe a quantidade de banheiros do imóvel:")
            imovel.garagem = prompt("O imóvel possui garagem? [Sim/Não]")
            
            const confirmacao = confirm(`Salvar este imóvel?\nProprietário: ${imovel.proprietario}.\nQuartos: ${imovel.quartos}.\nBanheiros: ${imovel.banheiros}.\nPossui garagem? ${imovel.garagem}.`)

            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            } else {
                alert("Voltando ao menu...")
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(`Imóvel ${i + 1}:\nProprietário: ${imoveis[i].proprietario}\nQuartos: ${imoveis[i].quartos}\nBanheiros: ${imoveis[i].banheiros}\nPossui Garagem: ${imoveis[i].garagem}`)
            }
            break
        case "3":
            alert("Você escolheu sair. Encerrando...")
            break
        default:
            alert("Opção inválida!")
    }
} while (opcao !== "3")