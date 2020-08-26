console.log(7 / 0) // Qualquer divisão por zero dá infinito no js
console.log("10.2" / 2) // O js entende que uma string com números dentro pode entrar em equações matemáticas, mas cuidado com o formato do número
console.log(0.1 + 0.7) // O Js não tem muita precisão em números com ponto flutuante, então ele vai dar um valor aproximado quando for o caso
// console.log(10.toString()) dá erro pois um dado literal não pode chamar uma função
console.log((10.123456).toFixed(2)) //Nesse caso, o dado está dentro do parêntese, somente assim um dado literal pode chamar uma função
