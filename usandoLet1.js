let numero = 1 // Escopo global
{
    let numero = 2 // Escopo restrito ao bloco
    console.log('Dentro = ', numero)
}
console.log('fora = ', numero)