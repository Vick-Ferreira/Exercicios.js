const prompt = require("prompt-sync")() // add pacote de entrada de dados 
// no html você vai usar input type para entrada de dados, aqui prompt seguido de pacote prompt-sync
const veiculo = prompt("Veiculo: ")
const preco = Number(prompt("Preco R$: "))

const entrada = preco * 0.50 // 50%
const parcela = (preco * 0.50) / 12

console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de R$ ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)
