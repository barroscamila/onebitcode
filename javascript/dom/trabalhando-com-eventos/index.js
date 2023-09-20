function register(ev) {
    console.log(ev)    
    // o ev é o evento passado na funcao, ele sempre fica disposnivel ao utilizar um eventListener
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert("Usuário " + username + " registrado!")
    } else {
        alert("As senhas não conferem!")
    }
}

const button = document.getElementById("register-button")

button.addEventListener("click", register)

/*
    button.addEventListener("click", function () {
        alert("Botão clicado!")
    })
*/

function removeListener() {
    button.removeEventListener("click", register)
    alert("Evento removido!")
}
// apos remover o evento com a funcao acima, o botão que esta vinculado a funcao register nao funciona mais

// É possível adicionar mais de um evento:
button.addEventListener("mouseover", function (ev) {
    console.log(ev.currentTarget)
})
