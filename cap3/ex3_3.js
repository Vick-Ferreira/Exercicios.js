/*a) Ler sálario e Ler tempo que funcionario está na empresa - em 4 anos  1%.Calcule quantos 4 anos a pessoa tem 
 e o salario final*/

 const prompt = require("prompt-sync")() // add pacote

 const salario = Number(prompt("Sálario R$: ")) //ler salario
 const tempo = Number(prompt("Tempo (anos): ")) //ler tempo

 const quadrienios = Math.floor ( tempo / 4)  //arredonda para baixo e deixa como numero inteiro
 const acrescimo = salario * quadrienios / 100

 console.log (`Quadriênios: ${quadrienios}`)
 console.log(`Salário Final R$: ${(salario+acrescimo).toFixed(2)}`)