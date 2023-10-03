//criando referência ao form e elementos de resposta do programa
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//criando um ouvinte de eventos, acionado quando aberta o botão submit
//função
frm.addEventListener("submit", (e) =>{ /*aqui estou dando a informação que ao clicar vou pegar os dados que se encontram no html
 com seu devidos IDs*/
 e.preventDefault()
 
    const nome = frm.inNome.value

    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
//agora fazer algo , com os dados que coletei com o codigo acima.

const media = (nota1 + nota2 / 2) // calculando media notas
resp1.innerText = `Média das notas ${media.toFixed(2)}` //forma de usar string e chamar variavel sem as concatenizações (+)e colocando como 2 numeros decimais que ira aceitar

//vamos agora criar a condição para essa nota

if(media >=7){ //condição é que SE a valor da variavel media for = ou maior que 7 vai receber a resposta a baixo
    resp2.innerText = `Parabéns você passou ${nome}` //direcionando a mensagem para a saida resp2 que é h2. iInlcuindo variavel nome
    resp2.style.color ="blue" //colocando cor na saida
}else{ //SE NÃO -  for qualquer coisa diferente da condição dada vai.. 
    resp2.innerText =`Opa ${nome} , você reprovou`
    resp2.style.color = "red"
  // resp2 referente a h2 vai exibir a resposta negativa

  //se a gente quiser colocar mais uma condição sobre o aluno usamo else if

  e.preventDefault()
}
})
  //SE NÃO SE
/*}else if (>=4 ){
    resp2.innerText = `${nome} você está de recuperação`
    resp2.style.color ="green"
}else{
    resp.innerText = `Opas ${nome} você foi aprovado`*/ 