const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit" , (e) =>{
    e.preventDefault() 

    const saque = Number(frm.inSaque.value)
    if(saque  % 10 != 0 ){ //se o valor de saque não é multiplicado por 10 
        alert("Valor invalido para as notas disponiveis (R$ 10,50,100)")
        frm.inSaque.focus()
        return
    }
    const notaCem = Math.floor(saque/ 100 ) //saque dividido por 100 arredondado para baixo,numeros inteiros
    let resto = saque % 100
    const notaCinquenta = Math.floor( resto / 50)
    resto = resto % 50
    const notaDez = Math.floor (resto / 10)    
    if(notaCem > 0) {
    resp1.innerText = `Notas de R$100: ${notaCem}`
    }
    if(notaCinquenta > 0) {
        resp2.innerText = `Nota de R$50: ${notaCinquenta}`
    }
    if(notaDez > 0){
        resp3.innerText=`Nota de R$10: ${notaDez}`
    }
})

