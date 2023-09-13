const resultado = prompt('Escolha uma alternativa:\na) 1\nb) 2\nc) 3')

switch (resultado) {
    case 'a':
        alert('O resultado é "1"')
        break
    case 'b':
        alert('O resultado é "2"')
        break
    case 'c':
        alert('O resultado é "3"')
        break 
    default:
        alert('Finalizando...')
}