total=0;
subtotal=0;
subtotalstr="";
lastoperator="+";
prevbutton="op";

function totalfunction(op) {
 swop = lastoperator;
 lastoperator = op;
 st = subtotal;
 st = parseInt(subtotalstr);
 
 switch (swop) {
  case "/":
   count = total / st;
   return count;
  case "*":
   count = total * st;
   return count;
  case "-":
   count = total - st;
   return count;
  case "+":
   count = total + st;
   return count;
  case "=":
   count = total + st;
   return count;
}
}

function totalfunctionoud(op) {
 swop = lastoperator;
 lastoperator = op;d
 t = number(total);
 switch (swop) {
  case "/":
   count = total / subtotal;
   return count;
  case "*":
   count = total * subtotal;
   return count;
  case "-":
   count = total - subtotal;
   return count;
  case "+":
   count = total + subtotal;
   return count;
  case "=":
   count = total + subtotal;
   return count;
}
}

function toetsuit(t) {
 alert("Toets '"+t+"' is niet actief");
}

function toets(t) {
switch (t) {
  case "c":
    document.getElementById("display").innerHTML = "";
    document.getElementById("total").innerHTML = "0";
	total = 0;
	subtotal = 0;
	subtotalstr = "";
    break;
  case 0:
    document.getElementById("display").innerHTML += "0";
	subtotal += 0;
	subtotalstr += "0";
    break;
  case 1:
    document.getElementById("display").innerHTML += "1";
	subtotal += 1;
	subtotalstr += "1";
    break;
  case 2:
    document.getElementById("display").innerHTML += "2";
	subtotal += 2;
	subtotalstr += "2";
    break;
  case 3:
    document.getElementById("display").innerHTML += "3";
	subtotal += 3;
	subtotalstr += "3";
    break;
  case 4:
    document.getElementById("display").innerHTML += "4";
	subtotal += 4;
	subtotalstr += "4";
    break;
  case 5:
    document.getElementById("display").innerHTML += "5";
	subtotal += 5;
	subtotalstr += "5";
    break;
  case 6:
    document.getElementById("display").innerHTML += "6";
	subtotal += 6;
	subtotalstr += "6";
    break;
  case 7:
    document.getElementById("display").innerHTML += "7";
	subtotal += 7;
	subtotalstr += "7";
    break;
  case 8:
    document.getElementById("display").innerHTML += "8";
	subtotal += 8;
	subtotalstr += "8";
    break;
  case 9:
    document.getElementById("display").innerHTML += "9";
	subtotal += 9;
	subtotalstr += "9";
    break;

  case "/":
    document.getElementById("display").innerHTML += "/";
	total = totalfunction("/");
    document.getElementById("total").innerHTML = total;
    document.getElementById("subtotal").innerHTML = subtotalstr;
	subtotal = 0;
	subtotalstr = "";
	lastoperator = "/";
    break;
  case "*":
    document.getElementById("display").innerHTML += "*";
	total = totalfunction("*");
    document.getElementById("total").innerHTML = total;
    document.getElementById("subtotal").innerHTML = subtotalstr;
	subtotal = 0;
	subtotalstr = "";
	lastoperator = "*";
    break;
  case "-":
    document.getElementById("display").innerHTML += "-";
	total = totalfunction("-");
    document.getElementById("total").innerHTML = total;
    document.getElementById("subtotal").innerHTML = subtotalstr;
	subtotal = 0;
	subtotalstr = "";
	lastoperator = "-";
    break;
  case "+":
    document.getElementById("display").innerHTML += "+";
	total = totalfunction("+");
    document.getElementById("total").innerHTML = total;
    document.getElementById("subtotal").innerHTML = subtotalstr;
	subtotal = 0;
	subtotalstr = "";
	lastoperator = "+";
    break;
  case "=":
	total = totalfunction("=");
    document.getElementById("total").innerHTML = total;
    document.getElementById("display").innerHTML = total;
    document.getElementById("subtotal").innerHTML = subtotalstr;
	subtotal = 0;
	subtotalstr = "";
	lastoperator = "+";
    break;
}
}