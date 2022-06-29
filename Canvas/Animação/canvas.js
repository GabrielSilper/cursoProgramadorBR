let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");


//Função criada pra criar um círculo e que vai obedecer a medidas do objeto objMedidas.
function drawCircle(c) {

    //Isso serve pra limpar os rastros da animação
    ctx.beginPath();
    ctx.rect(0,0,500,500);
    ctx.fillStyle = "beige";
    ctx.fill();


    ctx.beginPath();
    ctx.arc(c.x,c.y,c.raio,c.inicio,c.fim, c.antiHour);
    ctx.fillStyle = "pink";
    ctx.strokeStyle = "red";
    ctx.fill();
    ctx.stroke();
}

let objMedidas = {
    x: 150,
    y: 150,
    raio: 100,
    inicio: 0,
    fim: 0,
    //Esse antiHour serve para o círculo ir desenhando-se se for false ou apagando-se se for true.
    antiHour: true
  };
  

 setInterval(function(){
    if(objMedidas.fim < 2*Math.PI){
        objMedidas.fim+=0.1;
        objMedidas.x+=0.5;
    }
    drawCircle(objMedidas);

 },50) 


