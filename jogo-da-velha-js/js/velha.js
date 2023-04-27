
//var globais ----- 
var vez = "X"
var casas = document.getElementsByClassName("casa");
// ==============================


inicioJogo()


$(".btnJogar").click(function () {
    $(".casa").html("");
    inicioJogo();
    $(".casa").removeClass("vencedor");
    $(".casa").removeClass("x");
    $(".casa").removeClass("o");


})


function inicioJogo() {


    $(".btnJogar").hide();  // esconder botão
    
    
    $(".casa").click(function () {
        if ($(this).html() != "") {
            return  // parar a função
        }


        $(this).html(vez);

        verificaVitoria(vez);


        if (vez == "X") {
            $(this).addClass("x");
            vez = 'O';

        } else {
            vez = "X";
            $(this).addClass("o");
        }

        
    });
}




function verificaVitoria(vez) {
    setTimeout(function () {
        let ganhou = false;

        if (casas[0].innerHTML == casas[1].innerHTML &&
            casas[1].innerHTML == casas[2].innerHTML &&
            casas[2].innerHTML != "") {
            ganhou = true;
            $(casas[0]).addClass("vencedor");
            $(casas[1]).addClass("vencedor");
            $(casas[2]).addClass("vencedor");
        }
        else if (casas[3].innerHTML == casas[4].innerHTML &&
            casas[4].innerHTML == casas[5].innerHTML &&
            casas[5].innerHTML != "") {
            ganhou = true;
            $(casas[3]).addClass("vencedor");
            $(casas[4]).addClass("vencedor");
            $(casas[5]).addClass("vencedor");
        }
        else if (casas[6].innerHTML == casas[7].innerHTML &&
            casas[7].innerHTML == casas[8].innerHTML &&
            casas[8].innerHTML != "") {
            ganhou = true;
            $(casas[6]).addClass("vencedor");
            $(casas[7]).addClass("vencedor");
            $(casas[8]).addClass("vencedor");
        }
        else if (casas[0].innerHTML == casas[3].innerHTML &&
            casas[3].innerHTML == casas[6].innerHTML &&
            casas[6].innerHTML != "") {
            ganhou = true;
            $(casas[0]).addClass("vencedor");
            $(casas[3]).addClass("vencedor");
            $(casas[6]).addClass("vencedor");
        }
        else if (casas[1].innerHTML == casas[4].innerHTML &&
            casas[4].innerHTML == casas[7].innerHTML &&
            casas[7].innerHTML != "") {
            ganhou = true;
            $(casas[1]).addClass("vencedor");
            $(casas[4]).addClass("vencedor");
            $(casas[7]).addClass("vencedor");
        }
        else if (casas[2].innerHTML == casas[5].innerHTML &&
            casas[5].innerHTML == casas[8].innerHTML &&
            casas[8].innerHTML != "") {
            ganhou = true;
            $(casas[2]).addClass("vencedor");
            $(casas[5]).addClass("vencedor");
            $(casas[8]).addClass("vencedor");
        }
        else if (casas[0].innerHTML == casas[4].innerHTML &&
            casas[4].innerHTML == casas[8].innerHTML &&
            casas[8].innerHTML != "") {
            ganhou = true;
            $(casas[0]).addClass("vencedor");
            $(casas[4]).addClass("vencedor");
            $(casas[8]).addClass("vencedor");
        }
        else if (casas[2].innerHTML == casas[4].innerHTML &&
            casas[4].innerHTML == casas[6].innerHTML &&
            casas[6].innerHTML != "") {
            ganhou = true;
            $(casas[2]).addClass("vencedor");
            $(casas[4]).addClass("vencedor");
            $(casas[6]).addClass("vencedor");
        }



        setTimeout(function () {
            if (ganhou) {
                if (vez == "X") {
                    let placar = Number($("#placarX").html()) + 1;
                    $("#placarX").html(placar)
                } else {
                    let placar = Number($("#placarO").html()) + 1;
                    $("#placarO").html(placar)
                }

                $(".casa").off('click');
                $(".btnJogar").show(); // botão aparecer

                alert("O '" + vez + "' , Ganhou");
            } else {
                let vazias = 0;
                for (let i in casas) {
                    if (casas[i].innerHTML == "") {
                        vazias++;
                        break;
                    }
                }
                if (vazias == 0) {
                    $(".btnJogar").show();
                    alert("Deu velha !");
                }
                
            }
            


        }, 50)

    }, 50);
}

