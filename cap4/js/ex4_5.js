const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    e.preventDefault() 

    const numero = Number(frm.inNumero.value)
    const raiz = Math.sqrt(numero) //retorna raiz quadrada de um numero 


    if(Number.isInteger(raiz)){  // se o valor da raiz for um numero inteiro
        resp.innerText = `Raiz: ${raiz}`
      
    }else {
        resp.innerText = `Não há raiz exata para o ${numero}`
    }

    
})