const frm = document.querySelector("form");
const resp = document.querySelector("h3");


frm.addEventListener("submit" , (e) =>{

    const Valor = frm.inUso.value
    const Tempo = Number(frm.inTempo.value);

    const pagar = Math.ceil(Tempo / 15) * Valor //função arredonda para cima

 
    resp.innerText = `Valor a Pagar R$: ${pagar.toFixed(2)}`

    e.preventDefault()

})