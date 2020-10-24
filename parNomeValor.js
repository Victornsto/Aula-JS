// Par nome/valor
const saudacao = 'Opa' // Contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nomes/valores
const Cliente = {
    nome: 'Victor',
    idade: 23,
    peso: 100,
    endereço: {
        logradouro : 'Rua muito legal',
        numero: 2424
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)