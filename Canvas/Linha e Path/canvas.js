let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

//Sempre que for criar um novo path (Linha, Retângulo e...) o ideal é que comece um novo path, comando abaixo:
ctx.beginPath();

ctx.lineWidth = 4;
ctx.strokeStyle = "red";

//Comando pra ponto inicial da linha.
ctx.moveTo(10,10)
//E aqui decide até a onde a linha vai, eu preciso dos dois comando para assim criar a linha.
ctx.lineTo(300,300)
ctx.stroke();

//Aqui já inicia outra path. Isso faz ser totalmente diferente da anterior e que os Styles de baixo não interfira nas anteriores.
ctx.beginPath();
ctx.lineWidth = 7;
ctx.fillStyle = "pink";
ctx.strokeStyle = "blue";
ctx.moveTo(50,10)
ctx.lineTo(200,300)
ctx.lineTo(10,300)
ctx.closePath();
ctx.fill();
ctx.stroke();










