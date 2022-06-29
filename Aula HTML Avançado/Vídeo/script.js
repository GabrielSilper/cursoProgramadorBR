let video = document.getElementById("video");
let btn = document.getElementsByClassName("btn");

//Parte para criar funções para atribuir aos botões de controle do vídeo.
function fBack() {
  video.currentTime -= 15;
}

function fForward() {
  video.currentTime += 15;
}

function fVelDimuir() {
  video.playbackRate -= 0.1;
}

function fVelAumentar() {
  video.playbackRate += 0.1;
}

function fPlay() {
  video.play();
}
function fPause() {
  video.pause();
}

function fStop() {
  video.pause();
  video.currentTime = 0;
}

// Parte para esconder ou mostrar dependo do mouse oou não entrar no div do vídeo.
for (var elemento of btn) {
    elemento.style.visibility = "hidden";
  }
function fMostrar() {
  for (var elemento of btn) {
    elemento.style.visibility = "visible";
  }
}

function fEsconder() {
  for (var elemento of btn) {
    elemento.style.visibility = "hidden";
  }
}

//Parte para pode clicar na div do vídeo para poder ou dar play ou pausar. *Não finalizado, ideia inicial não funcionou*


let divVideo = document.getElementsByClassName("container");





