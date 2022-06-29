function criarAluno(nome, n1, n2){
    return {
        nombre : nome,
        nota1 : n1,
        nota2 : n2,
        media : function (){
            return (this.nota1+this.nota2)/2;;
        }
    };
}

function imprimirAlunoMedia(turma){
    for (let aluno of turma){
        console.log(aluno.nombre);
        console.log(aluno.media());
    }
    return;
}

let sala = [
    criarAluno("Gabriel", 2, 7),
    criarAluno("Silva", 10, 2),
    criarAluno("Pereira", 8, 9)
];

imprimirAlunoMedia(sala);





