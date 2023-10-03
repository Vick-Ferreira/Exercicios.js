 /* c) Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas)
 de im cliente.Exiba o valor a ser pago, conforme ilusta */

 const frm = document.querySelector("form");
 const resp = document.querySelector("h3");

 addEventListener("submit" ,  (e) => {
    const quilo = Number(frm.inQuilo.value);
    const consumo =Number(frm.inConsumo.value);


 const valor = (quilo / 1000) * consumo;
 resp.innerText = `Valor à pagar é R$: ${valor.toFixed(2)}`;

 e.preventDefault()
});