const input = document.getElementById("input")

document.getElementById("value").addEventListener("click", function () {
    input.value = input.value === "" ? "Olá, Mundo!" : ""

    console.log(input.value) // pega o valor momentâneo (tempo real)
    console.log(input.getAttribute('value')) // pega o valor atribuído inicialmente no HTML 
})

document.getElementById("type").addEventListener("click", function () {
    input.type = input.type !== "radio" ? "radio" : "text"
    //input.setAttribute("type", "radio") // outra forma de alterar
})

document.getElementById("placeholder").addEventListener("click", function (){
    input.placeholder = "Digite algo..."
})

document.getElementById("disable").addEventListener("click", function () {
    // OBS: o atributo 'disabled' retorna valores booleanos
    //input.disabled = input.disabled === true ? false : true
    input.setAttribute("disabled", !input.disabled) 
})

document.getElementById("data").addEventListener("click", function () {
    const data = input.dataset.somethingElse
    console.log("O valor do atributo data-something-else é: " + data)
    input.dataset.somethingElse = "Algum outro valor"
    console.log("O valor do atributo data-something-else agora é: " + input.dataset.somethingElse)
    // .dataset é uma propriedade que pode acessar todos os 'datas' de um elemento
})