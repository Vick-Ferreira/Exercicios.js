//Programa de etiquetas de produtos
const prompt = require("prompt-sync")()
const produtos = prompt("Produtos: ")
const num = Number(prompt("Nº de Etiquetas: "))

for(let i = 1; i <= num / 2; i++){   //num/2 pois vai imprimir duas etiquetas por linhas
  console.log(`${produtos.padEnd(30)} ${produtos.padEnd(30)}`)
}
if (num % 2 == 1 ){
    console.log(produtos)
}