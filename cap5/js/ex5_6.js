const frm = document.querySelector("form");
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.inNumero.value)  //recuperando numero informado
    let numDiversos = 0 // declarando e inicializando contador
    for(let i = 1 ; i <= num; i++) {
        if (num % i == 0){
        numDiversos++ // se é incrementa contador
    }
}
if(numDiversos == 2){
    resp.innerText = `${num} É primo`
}else{
    resp.innerText = `${num} Não é primo`
}
})