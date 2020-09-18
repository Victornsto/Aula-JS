const escola = "Cod3r"
console.log(escola.charAt(4))
// Permite mostrar somente o caractere referido, começando do zero
console.log(escola.charCodeAt(3))
// Mostra o código do caractere
console.log(escola.indexOf('3'))
// Mostra o caractere selecionado 
console.log(escola.substring(1))
console.log(escola.substring(0, 4))
/* Substring mostra o string que quer ver. Se escrever só um número, ele mostrarar o string apartir do char
que selecionou. Se escrever dois números, ele contará a partir do priemiro até um antior ao ultimo*/
console.log("Escola ".concat(escola).concat("!"))
console.log("Escola " + "Cod3r" + "!")
// Concatena as strings
console.log(escola.replace(/3/, "e"))
console.log(escola.replace(/\w/g, "e"))
// Substitui um número por uma letra
console.log('Ana,MAria,Pedro'.split(','))
// Gera um arrey e separa ele pelo char selecionado