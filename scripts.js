function janela(){
    let botao = document.getElementById("botao");
    let janela = document.getElementById("janela");
    let body = document.getElementById("body");
    let cod = document.getElementById("cod");

    botao.style.display="none"
    janela.style.display="block"
    janela.style.marginTop="15%"
    janela.style.transition=".5s ease"

    body.style.overflowY="hidden"
    cod.style.boxShadow="inset 0px 0px 20px var(--azul)"
}