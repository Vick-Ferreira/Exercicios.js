/*B) Elabore um programa para uma revenda de veiculos. O programa deve ler o modelo 
e o preço do veicuo. Apresentar como resposta o valor da entrada (50%) e o saldo
em 12x*/

//criar referencia ao form e aos elementos de responta

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

//criando ouvinte ao submit
frm.addEventListener("submit" , (e) => {

    const veiculo =  frm.inVeiculo.value 
    const preco =  Number(frm.inPreco.value) //no formulario o id preco vai receber o falou do input preco.

    //operações apos pegar os valores dos id

    const entrada = preco * 0.50; // calculando valor de entrada (50%);
    const parcelamento = (preco * 0.50) / 12  // calculando preco parcelas

    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de : ${parcelamento.toFixed(2)}`


    e.preventDefault()
})