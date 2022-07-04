// let dobro = function (x){
//     return 2*x;
// }

// arrow fuctions are more simple, but they cant use "bind" and "this", because they dont understand the context.

//arrow fuction syntaxes below:

let dobro = x => x*2;

let dobro2 = x => {
    if (x>20){
        return x*5;
    }else{
        return x*2;
    }
}




//Callback is the name for when a fuction use another fuction as a parameter, syntax below:

function somaDobroMaisValor(s,valor1, valor2){
    return s(valor1)+valor2;
}

// console.log(somaDobroMaisValor(dobro,5,10));

//another advantage of callback is for syncronize fuctions, like this:

let alunos = ["Gabriel","Silva","Pereira"];

function inserirAluno(nome){
    alunos.push(nome);
}

function listarAlunos(){
    for (var elemento of alunos) {
        console.log(elemento);
    }
}

// inserirAluno("Irineu");
// listarAlunos();

//at this way, just work because its local process, but if this depended conection of internet, will be different.

//and now its time to use callback more effectively, the way below is more recomend for this type of situation.

function insertAluno(nome, callback){
    setTimeout (function(){
        alunos.push(nome);
        callback();
    },1000);
}

insertAluno("Irineu",listarAlunos);

//another way is using promises and Async Await.






