let answer = document.getElementById("resposta");
let answerShow = document.getElementById("respostaTela");

console.log(answer.getAttribute("resposta"));

answer.addEventListener("click", function () {
  if (answer.getAttribute("resposta") == "Sim") {
    answerShow.innerHTML = "R: " + answer.getAttribute("resposta");
    answer.setAttribute("resposta", "Nao");
    answer.innerText = answer.getAttribute("resposta");
  }else{
    answerShow.innerHTML = "R: " + answer.getAttribute("resposta");
    answer.setAttribute("resposta", "Sim");
    answer.innerText = answer.getAttribute("resposta");
  }
});
