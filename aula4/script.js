

var saldo = 0;
var toggleSistem = true

while (toggleSistem){
    var interação = prompt('Utilize o menu para navegar no sistema. \n 1 - Ver saldo \n 2 - Depositar \n 3 - Sacar \n 4 - Sair');

    switch (interação) {
        case '1':
            console.log(`O seu saldo é ${saldo}` )
            break;
        case '2':
            let deposito = prompt('Digite o valor que você quer depositar');
            saldo += Number(deposito);
            console.log(`O seu novo saldo é R$ ${saldo},00` )
            break;
        case '3':
            let sacar = prompt('Digite o valor que você quer sacar');
            if(saldo - sacar <0){
                console.log("Esse valor não pode ser sacado!")
                break;
            }
            saldo -= Number(sacar);
            console.log(`O seu novo saldo é ${saldo}` )
            break;
        case '4':
                console.log("Você saiu do sistema")
                toggleSistem = false;
                break
        default:
            console.log("Esta opção não é valida")
            break;
    }

   
}

