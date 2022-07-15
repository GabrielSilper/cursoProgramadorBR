let J = $.noConflict();
let btnHide = document.getElementById("btnHide");
let escondido = false;

btnHide.addEventListener("click",()=>{
    if(!escondido){
        J("h1").hide();
        escondido = true;
    }else if(escondido){
        J("h1").show();
        escondido = false;
    }
});






