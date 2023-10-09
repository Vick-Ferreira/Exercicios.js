const frm = document.querySelector("form");
const resp = document.querySelector("#outEspacos");

frm.addEventListener("submit" , (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let estrelas = "" //acumulador
    for(let i = 1 ; i <= numero; i++) {
        if(i % 2 == 1){
            estrelas = estrelas + "*"
        }else{
            estrelas = estrelas + "-"
        }
    }
    resp.innerText = estrelas  //exibindo as estrelas 
})