
var somatorio = 0;
while (true) {
    var numeros =prompt('Digite um número');
    somatorio +=parseFloat(numeros);
    console.log(somatorio);

    if(isNaN(numeros)){
        console.log("Você não digitiou um número");
        break;
    }
}
