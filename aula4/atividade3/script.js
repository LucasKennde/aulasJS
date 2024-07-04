

let random = parseInt(Math.random()*10)
console.log(`EI, PSIU. O NÚMERO QUE ESCOLHI FOI ${random}, MAS É SECRETO VIU, NÃO CONTA PRA NINGUEM`)
while(true){
    var adivinha = parseInt(prompt('Tente adivinhar o numero escolhido pelo navegador'));

    if(adivinha == random){
        console.log(`Você acertou BB, o número era ${random}`)
        break
    }else{
        console.log("Você errou, que tal tentar denovo?")
    }
}