const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Esse comando pergunta se a constante tem valor de inteiro e responde true ou false
console.log(Number.isInteger(peso2)) // Como peso2 não é inteiro, ele responde false

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso2 + peso1)

console.log(media.toFixed(2)) /* o comando .toFixed limita os número depois da vírgua de uma fração muito grande
Dentro do parêntese você escolhe quantos número quer depois da vírgua */
console.log(media.toString()) // o comando .toString dá uma representação textutal de um instância de um objeto. E o dois dentro do parêntese é conver a string em números binários

console.log(typeof media)