//Programa ano copa do mundo

/* importar a biblioteca prompt-sync e criar uma função de entrada de dados síncrona que permite ao usuário 
inserir informações pelo terminal/console e capturá-las em seu código JavaScript.*/

const prompt = require("prompt-sync")()
console.log("Programa Ano de Copa do Mundo. Digite 0 para sair")
console.log("----------------------------")
do{
    const  ano = Number(prompt("Ano: "))
    if( ano == 0  ){
    break
    }else if( ano == 1942 || ano == 1946){
    console.log(`Não ouve copa em  ${ano}(Segunda Guerra Mundial)`)
    }else if ( ano >= 1930 && ano % 4 == 2 ){
    console.log(` Sim  ${ano}  é ano de Copa do Mundo`)
    }else{
        console.log(` ${ano}  Não é ano de Copa do Mundo`)
    }
    }while(true)
