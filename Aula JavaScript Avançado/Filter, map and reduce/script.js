let alunos = [];

function newAluno(nome, idade) {
  return { nome, idade };
}

alunos.push(newAluno("Gabriel", 30));
alunos.push(newAluno("Silva", 21));
alunos.push(newAluno("Pereira", 18));
alunos.push(newAluno("Irineu", 34));

// for (let aluno of alunos) {
//     if(aluno.idade <30){
//         console.log(aluno.nome);
//     }
// }

// the use of filter below:
// function filterMenosDe30(aluno){
//     return aluno.idade < 30;
// }

// let alunosComMenosDeTrinta = alunos.filter(filterMenosDe30);

// console.log(alunosComMenosDeTrinta);

//the use of map below:
// function nameAge (aluno){
//     return aluno.nome + " tem "+aluno.idade+" anos."
// }

// console.log(alunos.map(nameAge));

// function SobrenomeMais5anos(aluno){
//     return {
//         nomeInteiro : aluno.nome + "Sobrenome",
//         idade5anosAfter: aluno.idade+5
//     }
// }

//the use of reduce below:

function idadeTotalTurma(total, aluno) {
  return total + aluno.idade;
}

console.log(alunos.reduce(idadeTotalTurma, 0));
