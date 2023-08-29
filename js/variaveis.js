//Declaração de variáveis

//Utilizando var

/*var num1 = 20;
var num2 = 30;
var resp = num1 + num2;


console.log(resp);*/

//Utilizando o let

let num1 = 20;
let num2 = 30;

let resp = num1 + num2;

console.log("A soma é: ", resp);

//dois tipos de escopo
//escopo do script
//escopo da função

//criando uma função
function valor(){
    let num1 = 30;
    console.log("Valor de num1 dentro da função: ",num1);
}
//executando uma função
valor();

console.log("Valor de num1 fora da função: ", num1);

//Declarando variáveis com const
//Valor nunca muda

const pi = 3.141592653;
let valorn = 50;
let resposta = valorn * pi;

console.log("A resposta é: ", resposta);

alert(resposta);

