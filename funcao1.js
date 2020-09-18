// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
// O nome é "Sem retorno" pq vc não precisa usar o console.log. Basta chamar a função pelo nome
imprimirSoma(2,3)
imprimirSoma(2) // Not a Number pq não é possivel somar um valor com undefined
imprimirSoma(2, 10, 4, 5, 6 ,7 ,8) // Considera somente o primeiro e o segundo "a" e "b"
imprimirSoma() // Not a number pq não é possível somar undefined com undefined

// Função com Retorno
function soma(a, b = 1) {
    return a + b
}
// Nesse caso, caso não seja declarado o valor de b quando a função for chamada, ele fica com valor padrão "1"
// Para chamar essa função é preciso usar console.log
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())