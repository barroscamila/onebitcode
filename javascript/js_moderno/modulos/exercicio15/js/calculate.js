export default function calculate() {
    const resultInput = document.querySelector('#result')
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    const result = eval(input.value) // avalia um código JS representado como string e retorna seu resultado final (tomar cuidado para utilizar!! pode ler codigos inseguros que o usuario inserir)
    
    resultInput.value = result
    resultInput.classList.remove('error')
}