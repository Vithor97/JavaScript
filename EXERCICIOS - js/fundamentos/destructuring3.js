function rand({min = 0, max = 1000}){// Posso jogar um Objeto para function({} '->Este é o objeto')
    const valor = Math.random()*(max -min)+ min
    return Math.floor(valor)
}
const obj = {max: 50, min:40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log({})// Objeto vazio
