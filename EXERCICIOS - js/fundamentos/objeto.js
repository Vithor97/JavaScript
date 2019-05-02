//objeto em javascript é uma coleção de chave e valor. vc tem o nome do atributo e vc passa valor pra ele
const prod1 ={}// Duas chaves significa um objeto

prod1.nome = 'celular Ultra mega'
prod1.preco= 4998.90
prod1['Desconto '] = 0.40 //evitar atributos com espaços

console.log(prod1)

const prod2 ={
    nome:'Camisa Polo',
    preco: 79.90,
    tamannho: 1.80,
    obj: {
        blabla:1,
        obj: {
            teste: 33
        }
    }

}
console.log(prod2)
console.log(prod2.nome.toUpperCase())
console.log(prod2.obj.blabla);
console.log(prod2.obj.obj.teste)