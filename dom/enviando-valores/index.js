function register(element) {
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value
    // o '.children' serve para referenciar um elemento filho

    if (password === passwordConfirmation) {
        alert("Usuário " + username + " registrado!") 
        //console.log({ username, password, passwordConfirmation })
    } else {
        alert("As senhas não conferem!")
    } 
}