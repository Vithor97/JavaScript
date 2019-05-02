const valores = [7.7, 8.9 , 6.3 , 9.2]

console.log(valores[0], valores[3])
console.log()

for(i=0;i<valores.length;i++){
    console.log(valores[i])
}
console.log("Item procurado")


valores.push(45.5)
console.log(valores)
valores.slice(1,3)

console.log(valores)
valores.push({id:3}, false, null , 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)


var arr = [1, 2, 3, 4, 5, 6];
var removida = arr.splice(1,3)
console.log(removida)

console.log(arr)

var novoArr = arr.slice(2, 5);
console.log('Array original: ' + arr);
console.log('Novo array: ' + novoArr);var arr = [1, 2, 3, 4, 5, 6];
var novoArr = arr.slice(2, 5);
console.log('Array original: ' + arr);
console.log('Novo array: ' + novoArr);

console.log("i")

