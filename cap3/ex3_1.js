//somando dois numeros usando node.js e prompt-sync = pacote de entrada de dados

const prompt = require ("prompt-sync")() //add pacotes para entrada de dados 

const num1 = Number(prompt("1º Número: "))
const num2 = Number(prompt("2º Número: ")) // lendo os numeros

const soma = num1 + num2   //calcule a soma
console.log (`Soma é:  ${soma}`)  //exibe o resultado // saida de dados

