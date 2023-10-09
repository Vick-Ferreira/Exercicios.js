const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let resposta = "" //string com a responsta a ser exibida
let numContas = 0 //inicializa contador
let valTotal = 0  //acumulador 

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao =  frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    numContas++ //adicionando valores ao contador e acumulador

    valTotal = valTotal + valor
    resposta = resposta + descricao + "R$:" + valor.toFixed(2) + "\n"
    resp1.innerText = `${resposta}-----------`
    resp2.innerText = `${numContas} Contas - Total R$ ${valTotal.toFixed(2)}`

    frm.inDescricao.value = "" //limpando campo
    frm.inValor.value = ""
    frm.inDescricao.focus()
})