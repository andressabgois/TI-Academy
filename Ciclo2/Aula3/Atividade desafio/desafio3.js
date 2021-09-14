window.onload = function(){

	const valor1 = document.querySelector("#v1");
	const valor2 = document.querySelector("#v2");
	const valor3 = document.querySelector("#s");
	const btnRes = document.querySelector("#btn");

		btnRes.addEventListener('click',()=>{

			var box1 = valor1.value;
			var box2 = valor2.value;
			var boxresult =  valor3.value;
			var r = Number(box1)+Number(box2); 
			console.log(boxresult);
			console.log(r);
			
			if(boxresult==r){
				alert ("Sua soma está correta!")
			} else { 
				alert ("Sua soma está incorreta!")
			}
		});

	}