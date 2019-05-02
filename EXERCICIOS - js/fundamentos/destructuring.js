//Novo recurso no ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//Operacao de desestruturação 
const { nome, idade } = pessoa //Tire de dentro do Objeto pessoa os atributos nome e idade 

console.log(nome, idade)

// posso atribuir essas variaveis que foram tiradas 
const { nome: n, idade: i} = pessoa
console.log (n, i) 

// quando não existe dentro do Objeto pessoa, posso criar atributos dinamicamento do jeito abaixo
const { sobrenome = 'moura', bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) 

//Acessando a subFunção
const{endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)