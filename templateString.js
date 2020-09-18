const nome = 'hayes'
const concatenacao = 'Olá ' + nome + '!'
const template = ` 
  olá
  ${nome}! `
console.log(concatenacao, template) 
// usando a crase (`) no lugar das áspas simples ('), o editor permite usar a quebra de linha nas strings
console.log(`1 + 1 = ${1 + 1}`)
// o crifrão permite fazer uma interpolação/interpretação do que está entre as chaves

const up = texto => texto.toUpperCase() // criando uma função
console.log(`Ei... ${up('cuidado')}!`)