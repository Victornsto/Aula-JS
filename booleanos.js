let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
// ! = negativa um objeto. !! = Positiva um objeto

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // strinh with space
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'') // string empty
console.log(!!null) // nulo
console.log(!!NaN) // not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log (!!('' || null || 0 || ' '))
// ||= Ou bolleano. Nesse caso, como tem o !! ma frente, a função pede pra mostrar somento o objeto verdadeiro
let nome = ''
console.log(nome || 'Desconhecido')
// Nesse caso, o OU define que, se a string estiver vazia, ele irá escrever "Desconhecido".