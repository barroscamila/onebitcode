export default function (ev) {
    const button = ev.currentTarget // elemento que acionou o evento
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied'
        button.classList.add('success')
        window.navigator.clipboard.writeText(document.querySelector('#result').value) // clipboard = área de transferência
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
}