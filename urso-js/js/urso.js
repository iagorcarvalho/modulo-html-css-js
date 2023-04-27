//variáveis globais
var margem = 0;
var tempo = "";
var animaUrso = "";
var direcao = "frente";
var imgUrso = document.getElementById("img-urso");
var andando;
var quadros = [
    /*0*/ "./img/parado.png",
    /*1*/ "./img/direita.png",
    /*2*/ "./img/esquerda.png"
];



setTimeout(function () {
    animaUrso = setInterval(trocaQuadro, 30);
}, 3000)

tempo = setInterval(function () {
    let div = document.getElementById("divTempo");

    div.innerHTML = Number(div.innerHTML) - 1;

    if (Number(div.innerHTML) == 0) {
        clearInterval(tempo);
    } else {

    }

}, 1000)

function trocaQuadro() {
    andando = true;

    //--------------------------------TROCA DE QUADROS -----------------------------
    if (imgUrso.src.indexOf("direita.png") >= 0) {
        imgUrso.src = quadros[2];
    } else {
        imgUrso.src = quadros[1];
    }
    //-----------------------------------------------------------------------------


    //--------------------------------DIREÇÃO DO URSO -----------------------------
    if (direcao == "frente") {
        margem += 10;
        if (margem >= window.innerWidth - 190) {  //volta
            direcao = "trás";
            imgUrso.style.transform = "scaleX(-1)";
        }
    } else {
        margem -= 10;
        if (margem <= 0) {  // volta
            direcao = "frente";
            imgUrso.style.transform = "scaleX(+1)";

        }
    }

    imgUrso.style.marginLeft = margem + "px";
    //---------------------------------------------------------------------------
}

// ------------------------------PARAR URSO-----------------------------------------
function paraurso() {
    let botao = document.getElementById("botao");
    let divTempo = document.getElementById("divTempo");

    if (divTempo.innerHTML == 0) {
        if (andando) {
            clearInterval(animaUrso);
            imgUrso.src = quadros[0];
            andando = false;
            botao.innerHTML = "ANDAR URSO"
        } else {
            animaUrso = setInterval(trocaQuadro, 30);
            botao.innerHTML = "PARAR URSO";
        }
    }



}


