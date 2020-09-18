const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores.length)
// Mosta a quantidades de arrays

valores[4] = 10
// É possivel criar e atribuir valores nos arrays

valores.push({id: 3}, false, null, 'teste')
console.log(valores)
// Inclui valores nos arrays

console.log(valores.pop()) // mostra o ultimo vetor do array
delete valores[0] //deleta um vetor
console.log(valores)

console.log(typeof valores)