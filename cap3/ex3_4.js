/*b) Ler peso da ração em KG , quantidade que o gato come em gramas. quantos dias a ração vai durar? e quanto em gramas 
vai sobras?*/

const prompt = require("prompt-sync")() //add modulo

const PesoKg = Number(prompt("Peso da ração em (kg):"))
const Consumo = Number(prompt("Consumo diário em (gr):"))

const PesoGr = PesoKg * 1000 //criando variavel auxialiar        

const duracao = Math.floor(PesoGr / Consumo) //calculo  das respostas 
const sobra = PesoGr % Consumo

console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)
