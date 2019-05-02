const obj ={}
obj.nome = 'Bola'

var x = obj.nome
console.log(x)

function Obj (nome){
    this.nome = nome
    this.num = 3
    this.exec = function(){
        console.log('Exec..')
    }
}
const c = new Obj('Raquete')
const c2 = new Obj('Cadeira')

console.log(c.nome)
console.log(c.num)

console.log(c2.nome)
console.log(c2.exec())
c2.exec()
