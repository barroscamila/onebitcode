const valortxt = prompt('Digite o valor que será convertido, em metros (m):')

const unidade = prompt('Escolha a unidade de conversão a partir das opções abaixo:\n' + '\na) Milímetro (mm)' + '\nb) Centímetro (cm)' + '\nc) Decímetro (dm)' + '\nd) Decâmetro (dam)' + '\ne) Hectômetro (hm)' + '\nf) Quilômetro (km)\n')

const valor = parseFloat(valortxt)
let res = 0

switch (unidade) {
    case "a":
        res = valor*1000
        alert(`Resultado: ${valor} m = ${res} mm`)
        break
    case "b":
        res = valor*100
        alert(`Resultado: ${valor} m = ${res} cm`)
        break
    case "c":
        res = valor*10
        alert(`Resultado: ${valor} m = ${res} dm`)
        break
    case "d":
        res = valor/10
        alert(`Resultado: ${valor} m = ${res} dam`)
        break
    case "e":
        res = valor/100
        alert(`Resultado: ${valor} m = ${res} hm`)
        break
    case "f":
        res = valor/1000
        alert(`Resultado: ${valor} m = ${res} km`)
        break
    default:
        alert('Opção inválida.')
}

