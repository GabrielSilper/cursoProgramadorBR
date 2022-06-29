let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

ctx.beginPath();

let x = 150
let y = 150
let raio = 100
let inicio = 0
let fim = 2*Math.PI

ctx.arc(x,y,raio,inicio,fim);

ctx.strokeStyle = "red";
ctx.stroke();









