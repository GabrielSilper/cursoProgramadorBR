var pessoa = {
    nome: "José Siva",
    idade: 23
}

var contato = {
    telefone: 8765432,
    email: "jose@gmail.com"
}

var copia = {
    ...pessoa,
    ...contato,
    cidade: "Rio de Janeiro"    
}

console.log(pessoa);
console.log(contato)
copia.telefone = 12345678;
console.log(copia);