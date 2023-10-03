const frm = document.querySelector("form");
const resp = document.querySelector("#outPromoção");
const resp1 = document.querySelector("#outPrecoTerceiro");

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    const terceiro = preco / 2;  // 1 item com 50% de desconto
    const total = (preco * 2) + terceiro;

    resp.innerText = `${produto} Promoção, LEVE 3 POR R$: ${total.toFixed(2)}`;
    resp1.innerText = `O 3º produto custa apenas R$: ${terceiro.toFixed(2)}`;

    e.preventDefault(); // Correção: utilize preventDefault(), não preventDefaul()
});
