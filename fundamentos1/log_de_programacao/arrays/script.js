const listaDeCompras = ["Açucar", false]
console.log(listaDeCompras)

listaDeCompras[0] = "Arroz"
listaDeCompras[1] = "Feijão"
listaDeCompras[2] = 7
listaDeCompras[5] = "Batata"
console.log(listaDeCompras)

console.log(listaDeCompras[4])
console.log(listaDeCompras[10])
// o JS permite referenciar posições que não existem, porém indica que são undefined


