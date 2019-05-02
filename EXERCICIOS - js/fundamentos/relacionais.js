console.log('01)', '1' == 1)
console.log('02)', '1' === 1)// um é string o outro é numero
console.log('03)', '3' != 3)//output: false
console.log('04)', '3' !== 3)//são diferentes por causa do tipo

//>
//<
//<=
//=>

console.log(new Date().getFullYear())

var dia = new Date()

//console.log(dia.getHours())

function diasNoMes(mes, ano) {
    var data = new Date(ano, mes,0);
    return data.getDate()
}

// Exemplo:
console.log(diasNoMes(2, 2020));

