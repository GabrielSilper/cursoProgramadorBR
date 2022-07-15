document.addEventListener("DOMContentLoaded",()=>{
    let squares = document.querySelectorAll(".square");

    squares.forEach(element => {
        element.addEventListener("click",selecionar);
    });

});

function selecionar(eventoDoListener){
    jogada(eventoDoListener.target.id)
    if((eventoDoListener.target.id)){
        alert("cabo");
    }
    AtualizarTab();

}

function AtualizarTab(){
    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        let simb = casas[square.id];
        if(simb != ""){
            square.innerHTML = `<div class='${simb}'</div>`;
        }
    });
}