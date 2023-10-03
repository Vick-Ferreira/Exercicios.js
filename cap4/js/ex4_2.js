const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit" , (e) =>{
    e.preventDefault()

    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso //declaração de variavel que varia valore ao decorrer do codigo
    if(masculino) {
        peso = 22 * Math.pow(altura , 2) //retorna a base elevada ao expoente(eleva ao quadrado)
    }else{
        peso = 21 * Math.pow(altura , 2)
    }
    
        resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}`
    })


/*forma simplificada de operador condicional e a baixo a forma completa.
const peso = masculino ? 22 * Math.pow(altura,2) : 21 * Math.pow(altura,2) 
maculino é a condição, apos o  ? é se for verdade (if) e apos o :  é false (else)
 */