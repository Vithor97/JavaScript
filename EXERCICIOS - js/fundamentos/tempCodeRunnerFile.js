function diasNoMes(mes, ano) {
    var data = new Date(ano, mes, 0);
    return data.getDate();
}

// Exemplo:
console.log(diasNoMes(2, 2017));