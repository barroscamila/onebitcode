function sum(...numbers) {  
    return numbers.reduce((accum, num) => accum + num, 0)    
}

console.log(sum(1, 2))
// 0, 1 -> 1
// 1 + 2 -> 3

console.log(sum(2, 2, 2, 2, 3, 5, 5, 3))
// 0 + 2 -> 2
// 2 + 2 -> 4
// 4 + 2 -> 6
// 6 + 2 -> 8
// 8 + 3 -> 11
// 11 + 5 -> 16
// 16 + 5 -> 21
// 21 + 3 -> 24

console.log(sum(10, 38, 911, 284))
// 0 + 10 -> 10
// 10 + 38 -> 48
// 48 + 911 -> 959
/// 959 + 284 -> 1243

