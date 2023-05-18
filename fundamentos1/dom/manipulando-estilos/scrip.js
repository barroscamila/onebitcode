function useLightTheme() {
    document.body.style.color = "#212529"
    document.body.style.backgroundColor = "#f1f5f9"
}

function useDarkTheme() {
    document.body.style.color = "#f1f5f9"
    document.body.style.backgroundColor = "#212529"
}

function switchTheme() {
    /* 
        .classList -> permite acessar a lista de classes do elemento
        .toggle() -> permite alternar, exemplo: se tiver a classe, ele  irá remover, se não tiver a classe, irá adicionar
    */
    document.body.classList.toggle("is-light")
    document.body.classList.toggle("is-dark")
}

document.getElementById("lightBtn").addEventListener("click", useLightTheme)
document.getElementById("darkBtn").addEventListener("click", useDarkTheme)

document.getElementById("switchBtn").addEventListener("click", switchTheme)

/*
    Não é possível utilizar inline (useLightTheme e useDarkTheme) e o método toggle ao mesmo tempo, pois o estilo inline irá ser priorizado!

    Trabalhar com apenas uma das opções.
*/
