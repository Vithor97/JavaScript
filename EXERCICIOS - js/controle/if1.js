function soBoaNoticia(nota){
    if(nota >= 7){
        console.log("Aprovado com: " + nota)
    }
    else{
        console.log("Reprovado")
    }
}

function seForVerdade(valor){
    if(valor){
        console.log('É verdade...' +valor)
    }
}

soBoaNoticia(8.2)
seForVerdade(null)
seForVerdade(0)
seForVerdade('')
seForVerdade('?')
seForVerdade([])
seForVerdade([1,2])
seForVerdade({})