const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10: // case 10 OU 9 é como se fosse Or, assim não preciso repetir o console.log() do case 9
        case 9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacão')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Invalida')
    }
}

imprimirResultado(10)
imprimirResultado(-1)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(7)
imprimirResultado(6.99)