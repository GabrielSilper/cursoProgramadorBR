let casas = ["", "", "", "", "", "", "", "", ""];
let vezJogador = 0;
let pecas = ["x", "o"];
let fim = false;
let estados = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


function jogada(position) {

    if (fim) {
        return;
    }

    if (casas[position] == "") {
        casas[position] = pecas[vezJogador];

        fim = teveGanhador();
        if (!fim) {
            if (vezJogador == 0) {
                vezJogador = 1;
            } else {
                vezJogador = 0;
            }
        }
    }    
    return fim;
}

function teveGanhador() {

    for (let i = 0; i < estados.length; i++) {

        let array = estados[i];

        let pos1 = array[0];
        let pos2 = array[1];
        let pos3 = array[2];

        if (casas[pos1] == casas[pos2] && casas[pos1] == casas[pos3] && casas[pos1] != ""){
            return true;
        }


    }

    return false;

}
