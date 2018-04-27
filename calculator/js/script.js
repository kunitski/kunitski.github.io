
$(document).ready(function(){
	var input = $('.but');
	
	input.click(function() {
		A=$(this).val();
		pole = document.calc.display.value;	
		B = document.calc.display.value=(pole+A);	
		Nam = parseFloat(B);
	})
///////////// click С ////////////	
	document.getElementById("but_clr").addEventListener("click", clr);
	
	function clr() {
		document.calc.display.value = "";
		document.calc.displayStr.value = "";
		Znach = "";
		action = "";
	}	
///////////// click +	////////////
	document.getElementById("but_plus").addEventListener("click",plus);
	
	function plus () {
		if(pole == ""){
			document.calc.display.value = "";
		}
		else{
		Znach = Nam;
		document.calc.displayStr.value=(Znach + "+");
		pole = document.calc.display.value="";
		action = "+";
		}
	}
///////////// click - ////////////
	document.getElementById("but_minus").addEventListener("click",minus);
	
	function minus () {
		if(pole == ""){
				pole = "-";
			}
		else{
		Znach = Nam;
		document.calc.displayStr.value=(Znach + "-");
		B = document.calc.display.value="";
		action = "-";}
	}	
///////////// click * ////////////
	document.getElementById("but_multiply").addEventListener("click",multiply);
	
	function multiply () {
		if(pole == ""){
			document.calc.display.value = "";
		}
		else{
		Znach = Nam;
		document.calc.displayStr.value=(Znach + "*");
		B = document.calc.display.value="";
		action = "*";
		}
	}		
///////////// click (/) ////////////
	document.getElementById("but_divide").addEventListener("click",divide);
	
	function divide () {
		Znach = Nam;
		document.calc.displayStr.value=(Znach + "/");
		B = document.calc.display.value="";
		action = "/";
	}
///////////// click √  //////////////
	document.getElementById("but_root").addEventListener("click",root);
	
	function root () {
		document.calc.displayStr.value=("√" + Nam);
		if(Nam){
		Rez = Math.sqrt(Nam);
		document.calc.display.value =(Rez);
		}
		else
			document.calc.display.value = "";
	}
///////////// click sin  //////////////
	document.getElementById("but_sin").addEventListener("click",sin);
	
	function sin () {
		if(Nam){
		Rez = Math.sin(Nam);
		document.calc.displayStr.value =(Rez);
		}
		else
			document.calc.display.value = "";
	}
///////////// click cos  //////////////
	document.getElementById("but_cos").addEventListener("click",cos);
	
	function cos () {
		if(Nam){
		Rez = Math.cos(Nam);
		document.calc.display.value =(Rez);
		}
		else
			document.calc.display.value = "";
	}
///////////// click tan  //////////////
	document.getElementById("but_tan").addEventListener("click",tan);
	
	function tan () {
		if(Nam){
		Rez = Math.tan(Nam);
		document.calc.display.value =(Rez);
		}
		else
			document.calc.display.value = "";
	}
///////////// click %  //////////////
	document.getElementById("but_percent").addEventListener("click",percent);
	
	function percent () {
		Rez = Znach /100 * Nam;
		document.calc.display.value =(Rez);
	}
///////////// click = ////////////
	document.getElementById("but_doit").addEventListener("click", calculate);
	
	function calculate() { 
		if(action == "+") {
			Rez = Znach + Nam;
			document.calc.display.value =(Rez);
			document.calc.displayStr.value=(Znach + "+" + Nam);
		}
		else if(action == "-"){
			Rez = Znach - Nam;
			document.calc.display.value =(Rez);
			document.calc.displayStr.value=(Znach + "-" + Nam);			
		}
		else if(action == "*"){
			Rez = Znach * Nam;
			document.calc.display.value =(Rez);
			document.calc.displayStr.value=(Znach + "*" + Nam);
		}
		else if(action == "/"){
			Rez = Znach / Nam;
			document.calc.display.value =(Rez);
			document.calc.displayStr.value=(Znach + "/" + Nam);
			if(Nam==0)
				document.calc.display.value =("На ноль делить нельзя!");
		}
		else if(pole == ""){
			document.calc.display.value ="";
		}
		else{
		document.calc.display.value =(Nam);
		}
	}
///////////// pointing ////////////	
	input.mouseenter(function(){
		this.classList.add("guidance");
	})
	input.mouseleave(function(){
		this.classList.remove("guidance");
	})
});


