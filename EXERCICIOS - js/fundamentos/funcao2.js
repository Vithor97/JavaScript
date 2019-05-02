//Armazenando uma funcao em uma variavel 
const imprimirSoma = function(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variavel 
const soma = (a,b) =>{ // mesma coisa que a função anterior
    return a+b
}

console.log(soma(3,3))


//retorno implícito

const subtracao = (a,b) => a-b
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('Playstation 4')