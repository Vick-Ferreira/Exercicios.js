//a)Elaborar um programa para o Cinema, que leia o titulo e a duração de um filme em minutos.
//Exiba o titulo do filme e converta a duração para horas e minutos,conforme destacado.

//criando referência  ao form e aos elementos h3 , h4 (respostas) do HTML para comunicação

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//criar um ouvinte , acionando qundo o botão for clicado
frm.addEventListener("submit", (e) =>{

    const titulo = frm.inTitulo.value //obtém conteudo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) // retorna valor para baixo, parte inteira do numero
    const minutos = duracao  % 60 // resto da divisão

    resp1.innerText = titulo
    resp2.innerText = `${horas} hora(s) e ${minutos} minutos(s)`

    e.preventDefault() // MOSTRA E FICA A  RESPOSTA  não envia o formulario.
})
