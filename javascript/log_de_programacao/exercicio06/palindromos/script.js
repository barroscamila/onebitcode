const palavra = prompt('Informe a palavra que será verificada:')

let palavraMin = palavra.toLowerCase()
let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavraMin[i]
}

if (palavraMin === palavraInvertida) {
    alert(`A palavra "${palavra}" é um palíndromo!`)
} else {
    alert(`A palavra "${palavra}" não é um palíndromo!\nPalavra invertida: ${palavraInvertida}.`)
}


