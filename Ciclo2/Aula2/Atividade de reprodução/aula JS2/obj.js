
/*
var
let
const
*/

/*
var nome = "Andressa"; //variável global. Obs. variaveis dentro de funções são variáveis locais
let sobrenome = "Bonete";

if (true){
	console.log("Var nome= "+ nome);
	var nm = nome;
	let sn = "Gois"
	console.log(sobrenome);
	console.log("Chamando o sobrenome "+sobrenome);
}

console.log("Meu nome é "+nm+" "+sobrenome+" "+sn); //não lê pq let sn está fora
console.log("Var nome= "+ nm);
*/

var Pessoa = {
		nome: "Andressa",
		rua: "Rua Dez",
		ncasa: "114",
		dados: function(){
			document.write(
				"Nome...:"+this.nome+"<br>"+
				"Rua...:"+this.rua+"<br>"+
				"N. casa...:"+this.ncasa+"<br>")
		}
}
Pessoa.dados();

//console.log("Nome "+Pessoa.nome+" Endereço "+Pessoa.rua+" N. "+Pessoa.ncasa);