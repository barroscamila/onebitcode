function calcularAreaTriangulo() {
    const b = parseFloat(prompt("Qual o valor da base do triângulo?"))
    const a = parseFloat(prompt("Qual o valor da altura do triângulo"))
    return b * a / 2
}

function calcularAreaRetangulo() {
    const b = prompt("Qual o valor da base do retângulo?")
    const a = prompt("Qual o valor da altura do retângulo?")
    return b * a 
}

function calcularAreaQuadrado() {
    const l = prompt("Qual o valor do lado do quadrado?")
    return l ** 2
}

function calcularAreaTrapezio() {
    const bM = parseFloat(prompt("Qual o valor da base maior do trapézio?"))
    const bm = parseFloat(prompt("Qual o valor da base menor do trapézio?"))
    const a = prompt("Qual o valor da altura do trapézio?")
    return (bM + bm) * a / 2 
    // É preciso transformar as strings de 'bM' e 'bm' em number number, se não serão concatenados devido ao '+'
}

function calcularAreaCirculo() {
    const raio = prompt("Qual o valor do raio do círculo?")
    return 3.14 * (raio ** 2)
}

function exibirMenu() {
    return prompt(
        "Qual forma geométrica você gostaria de calcular?\n" +
        "1. Triângulo\n" +
        "2. Retângulo\n" +
        "3. Quadrado\n" +
        "4. Trapézio\n" +
        "5. Círculo\n" +
        "6. Sair"
    )
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()
        resultado = ""

        switch (opcao) {
            case "1":
                resultado = calcularAreaTriangulo()
                break
            case "2":
                resultado = calcularAreaRetangulo()
                break
            case "3":
                resultado = calcularAreaQuadrado()
                break
            case "4":  
                resultado = calcularAreaTrapezio()
                break
            case "5":
                resultado = calcularAreaCirculo()
                break
            case "6":
                alert("Você escolheu sair. Encerrando...")
                break
            default:
                alert("Opção inválida!")    
        }

        if (resultado) {
            alert("Resultado: " + resultado)
        }
    } while(opcao !== "6")
}

executar()

