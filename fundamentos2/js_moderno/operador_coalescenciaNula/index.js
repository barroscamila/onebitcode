/* 
    const a = 0              // o JS entende como false
    const b = null           // o JS entende como false
    const c = "Teste"        // o JS entende uma string com conteúdo como true

    console.log(a || b || c) // Retorna "teste"

    console.log(a ?? b ?? c) // Retorna o '0', pois o operador '??' testa se o valor é  null ou undefine para passar para o próximo valor
*/

let a = 0
let b = a || 42

console.log({ a, b }) // b = 42 pois a é lido como false

b = a ?? 4

console.log({ a, b }) // b = 0 pois 'a' não é null, nem undefined

let c = null ?? 42

console.log(c) // c = 42, pois valores null ou undefined são ignorados
