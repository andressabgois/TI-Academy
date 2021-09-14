var nome = prompt("Digite seu nome:");

var numero = prompt(nome + ", escolha um número, por gentileza:")

    if(numero == parseInt(numero)){
        console.log(numero + " é um valor inteiro");
    } else {
        console.log(numero + " não é um valor inteiro");
    }

    function alerta(){
        alert("Uma string foi enviada!");
        alert("Sua string será convertida para número!");
    }
    alerta ();

numero = parseInt(numero);

var v = (numero == numero);
var s = (numero + numero);
var m = (numero - numero);
var r = (numero % numero);
var q = (numero * numero);

document.write("1.Seja bem vindo(a): " + nome +"<br>");
document.write("2.Você digitou o número: (" + numero + ")" + "<br>");
document.write("3.O retorno da comparação booleana é: " + v + "<br>");
document.write("4.A soma dos valores é: " + s + "<br>");
document.write("5.A subtração dos valores é: " + m + "<br>");
document.write("6.O resto da divisão é de: " + r + "<br>");
document.write("7.O quadrado do número é: " + q + "<br>");
document.write("<br>")

var fruta = prompt ("Escolha uma fruta:\n\n laranja\n uva\n manga");

console.log(fruta);

var a="laranja";
var b="uva";
var c="manga";

if(fruta == a || fruta == b || fruta == c){
    document.write("A fruta escolhida foi: "+fruta);
} else{
    alert(nome + ", a fruta escolhida não está na lista!");
}