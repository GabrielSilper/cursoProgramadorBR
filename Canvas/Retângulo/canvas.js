let tela = document.getElementById("tela");

let ctxt = tela.getContext("2d");


//Primeiro maneira de fazer um retângulo.
//Preenchido.
ctxt.fillStyle = "blue";
ctxt.fillRect(10,10,100,300);

//Segunda Maneira de fazer um retângulo.
//Somente borda.
ctxt.strokeStyle = "red";
ctxt.strokeRect(120,10,100,300);


//Nesse comando eu aumento a linha ou a borda do retângulo preenchido.
ctxt.lineWidth = 10;


//Terceira maneira de fazer um retângulo.
//Preenchido e com borda.
//Nessa maneira preciso do Stroke e Fill Style, porém como já tinha no código, não coloquei novamente.

ctxt.rect(250,10,100,300);
ctxt.fill();
ctxt.stroke();



//Esse comando é pra limpar em forma de retângulo e é parecido com os comando de criar um retângulo, como pode observar, tem um pequeno quadrado que aparece o fundo.
ctxt.clearRect(20,20,30,30)







