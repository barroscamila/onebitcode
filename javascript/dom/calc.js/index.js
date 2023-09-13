const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        const value = charKeyBtn.dataset.value // acessar o data-value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    resultInput.value = ''
    input.focus() // focar/colocar o cursor no input
})

input.addEventListener('keydown', function (ev) { //evento KEYDOWN = quando uma tecla é acionada/apertada
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) { // ev.key -> a tecla acionada
        input.value += ev.key
        return // encerrar a função
    } 

    if (ev.key === 'Backspace') { // tecla de deletar
        input.value = input.value.slice(0, -1) // posicao inicial a -1 (penultimo caracter)
    }

    if (ev.key === 'Enter') { // tecla enter
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    const result = eval(input.value) // avalia um código JS representado como string e retorna seu resultado final (tomar cuidado para utilizar!! pode ler codigos inseguros que o usuario inserir)
    
    resultInput.value = result
    resultInput.classList.remove('error')
}

document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
    const button = ev.currentTarget // elemento que acionou o evento
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied'
        button.classList.add('success')
        window.navigator.clipboard.writeText(resultInput.value) // clipboard = área de transferência
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})

document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26934a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }    
})

