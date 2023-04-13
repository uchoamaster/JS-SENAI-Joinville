/**
 * var
 * let
 * const
 * 
 * */
let nome; //undefined
let Nome = "Carlos";
let status = true;
let idade = 31;
const curso = "JS";


document.write("O Aluno " +Nome+ " tem "+ idade+ "anos e está estudando "+curso);


function nome_funcao(){
    alert("Login ou senha incorretos!");
}

function soma(a,b){
    var total = a + b;
    alert("Valor da soma: " + total);
}