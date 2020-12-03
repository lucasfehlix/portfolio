document.querySelector(".hamburguer").addEventListener("click", () => 
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector('#qtde').addEventListener("change", atualizaPreco)
document.querySelector('#js').addEventListener("change", atualizaPreco)
document.querySelector('#layout-sim').addEventListener("change", atualizaPreco)
document.querySelector('#layout-nao').addEventListener("change", atualizaPreco)
document.querySelector('#prazo').addEventListener("change", function () {
    const prazo = document.querySelector('#prazo').value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizaPreco()
})

function atualizaPreco(){
    const qtde = document.querySelector('#qtde').value
    const temJS = document.querySelector('#js').checked
    const incluiLayout = document.querySelector('#layout-sim').checked
    const prazo = document.querySelector('#prazo').value

    let preco = qtde * 100
    if (temJS) preco *= 1.1
    if (incluiLayout) preco += 500
    // console.log("---------------------");
    // console.log(`Preço Inicial: ${preco}`);
    let taxaUrgencia = (10 - prazo) * 0.1;
    preco *= 1 + taxaUrgencia
    
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
    
    // console.log(`prazo: ${prazo}`);
    // console.log(`taxa: ${taxaUrgencia.toFixed(2)}`);
    // console.log(`Preço Final: ${preco.toFixed(2)}`);
    // console.log("---------------------");
}
