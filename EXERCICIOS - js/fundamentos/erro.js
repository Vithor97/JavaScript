function tratarErroELancar(erro){
    //throw new Error('...erro')
    //throw 10
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date()
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUppercase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    } finally{
        console.log('final')
    }
    
}

const obj = {name: 'Vitor' }

imprimirNomeGritado(obj)

console.log('oi')