//par nome/valor

const saudacao = 'Opa' 

function exec(){
    const saudacao = 'Falaaa' //contexto lexico 2
    return saudacao
}

//Objetos sao grupos aninhados de pares nome/valor
console.log(exec())

const cliente = {
    nome: 'Pedro',
    idade:32, 
    peso:90,
    endereco:{
        logradouro:'Rua Raul Pompeia',
        numero: 32
    }
}

console.log(saudacao)
console.log('nome: ' +cliente.nome + " Endereço: "+ cliente.endereco.logradouro)