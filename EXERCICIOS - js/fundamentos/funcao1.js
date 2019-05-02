//função sem retorno
function imprimirSoma(a,b){
    console.log(`soma = ${a+b}`)
}

imprimirSoma(2,3)
imprimirSoma(2)

//Fuuncao com retorno
function soma(a, b=0){
    return a+b
}
    

console.log(soma(2,3))