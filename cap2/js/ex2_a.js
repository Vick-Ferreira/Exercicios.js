 const frm = document.querySelector("form");
 const resp1 = document.querySelector("#outMedicamento");
 const resp2 = document.querySelector("#outPromocao")
  frm.addEventListener("submit" , (e) => {

    const medicamento = frm.inMedicamento.value;
    const preco = Number(frm.inPreco.value); 

    const promo = Math.floor (preco * 2) //função que arredonda o valor para baixo , vai ter os centavos como desconto
 
    resp1.innerText = `Promoção de ${medicamento}`;
    resp2.innerText = `Leve 2 por apenaas R$: ${promo.toFixed(2)}`

    e.preventDefault()
});