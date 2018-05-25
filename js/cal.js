
function calculate()
 {
 	var num1 = Number(document.getElementById("num1").value);
 	var num2 = Number(document.getElementById("num2").value);
 	var sel = document.getElementById("sel").value;
 	var num3;

 switch(sel)
 {
 	case '+':
 	 num3=Number(num1+num2);
 	 break;
 	 case '-':
 	 num3=Number(num1-num2);
 	 break;
 	 case '*'
 	 num3=Numer(num1*num2);
 	 break;
 	 case '/':
 	 num3=Number(num1/num2);
 	 break;
 	 case '%':
 	 num3=Number(num1%num2);
 	 break;
 	 default:
 	 var display=document.getElementById("ans").innerHTML="sorry wrong choice"
 	 break;


 }
	var display=document.getElementById("ans").innerHTML=num3;
	//var dis=document.getElementById("d").innerHTML=sel;
}