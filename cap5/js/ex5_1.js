const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit" , (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value) // da onde o numero vai vir e obter o numero

    let resposta = "" // variavel tipo string para concatenar com a resposta

    //criando laço de repetição

    for (let i = 1; i <=10; i++){
    
        resposta = `${resposta} ${numero} x ${i} = ${numero * i}\n`  // quebra de linha
        //variavel de resposta vai acumulando os nuvos conteudos 
    }
    resp.innerText = resposta


})