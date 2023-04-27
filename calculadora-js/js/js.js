var visor = document.getElementById('resultado');
var operador = "";
var valor1 = 0;
var historico = document.getElementById('historico')




function insert(valor) {
    if (visor.value.length <= 20) {
        if (valor === ',') {            // tratei a virgula;
            if (visor.value.indexOf(',') < 0) {
                if (visor.value == "") {
                    visor.value = "0,";
                } else {
                    visor.value += ",";
                }
            }
        } else if (valor == 0) {   // tratei o 0;  
            if (visor.value != '0') {
                visor.value += 0;
            }
        } else if (visor.value == '0') {   //tratei o começo 
            visor.value = valor;
        } else {
            visor.value += valor;
        }

    }



}

function btnOp(op) {
    operador = op;
    valor1 = Number(getVisor());
    historico.innerHTML += visor.value + " " + operador;

    visor.value = "";


}


function btnIgual() {
    let valor2 = Number(getVisor());
    let total = 0;
    historico.innerHTML += " " + visor.value + " = ";

    switch (operador) {
        case "+":
            total = valor1 + valor2;
            break;
        case "-":
            total = valor1 - valor2;
            break;
        case "x":
            total = valor1 * valor2;
            break;
        case "/":
            if (valor2 == 0) {
                total = "Não Dividir por 0!";
            } else {
                total = valor1 / valor2;
            }
            break;

    }
    setVisor(total);
    historico.innerHTML += visor.value + "<br/>"
}

function getVisor() {
    let valor;
    if (visor.value.indexOf(",") >= 0) {
        valor = visor.value.replace(",", ".");
    } else {
        valor = visor.value;

    }
    return valor;
}

function setVisor(valor) {
    valor = valor.toString();

    if (valor.indexOf(".") >= 0) {
        valor = valor.replace(".", ",");
    }

    visor.value = valor;
}

function btnC() {
    visor.value = 0;
    operador = "";
    valor1 = ""
}

function btnCE() {
    visor.value = "";

}

function btnDel() {
    visor.value = visor.value.slice(0, visor.value.length - 1);
}

function btnPn() {
    let valor = Number(getVisor());
    setVisor(valor * -1);                         //setVisor(Number(getVisor()) * (-1));
}


function btnDelh () {
    historico.innerHTML = "" ;
    
 
}