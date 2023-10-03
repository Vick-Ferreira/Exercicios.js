//utilizando node.js
//Programa pescaria
const prompt = require("prompt-sync")() //adicionando pacote prompt-sync

const pessoas = Number(prompt("Nº pessoas: ")) 
const peixes = Number(prompt("Nº Peixe:"))

let pagar
if(peixes <= pessoas) {
    pagar = pessoas * 20
}else{
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}
console.log(`Pagar R$: ${pagar.toFixed(2)}`)

