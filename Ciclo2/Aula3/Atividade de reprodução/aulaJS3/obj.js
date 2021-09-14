/* objetos */

function Pessoa(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
}

var ps1 = new Pessoa(" Andressa", "Gois", 28); //construtor
console.log("Pessoa 1 - Nome "+ ps1.nome +" "+ ps1.sobrenome +" idade: "+ ps1.idade);

var ps1 = new Pessoa("Maria");
console.log("Pessoa 2 - Nome "+ps1.nome+" "+ps1.sobrenome);
