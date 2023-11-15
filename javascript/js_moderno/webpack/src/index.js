import dayjs from 'dayjs'
import './styles/index.css'

alert(`Hoje é: ${dayjs().format("DD/MM/YYYY")}`)


// npx webpack -> empacota o código, incluindo tudo que precisa para ele funcionar (inclusive o node_modules)

// npm install -> instala todos os node modules apagados anteriormente (pelo json ele verifica o que tinha antes)