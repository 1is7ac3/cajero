var button0=document.getElementById('buttonh0');
var button1=document.getElementById('buttonh1');
var button2=document.getElementById('buttonh2');
var button3=document.getElementById('buttonh3');
var button4=document.getElementById('buttonh4');
var button5=document.getElementById('buttonh5');
var button6=document.getElementById('buttonh6');
var button7=document.getElementById('buttonh7');
var button8=document.getElementById('buttonh8');
var button9=document.getElementById('buttonh9');
var buttona=document.getElementById('buttonha');
var buttonb=document.getElementById('buttonhb');
var buttonc=document.getElementById('buttonhc');
var buttonI1=document.getElementById('buttonI1');
var buttonI2=document.getElementById('buttonI2');
var buttonI3=document.getElementById('buttonI3');
var buttonI4=document.getElementById('buttonI4');
var buttonD1=document.getElementById('buttonD1');
var buttonD2=document.getElementById('buttonD2');
var buttonD3=document.getElementById('buttonD3');
var buttonD4=document.getElementById('buttonD4');
var p1=document.getElementById('ph1');
var p2=document.getElementById('ph2');

var cajero=0;
class billete{
	constructor(valor ,cantidad)
	{
		this.valor=valor;
		this.cantidad=cantidad;
	}
}
caja=[];
caja.push(new billete(10000,15));
caja.push(new billete(5000,50));
caja.push(new billete(2000,24));
caja.push(new billete(1000,30));
caja.push(new billete(500,10));
caja.push(new billete(100,10));
caja.push(new billete(50,15));
caja.push(new billete(20,10));
caja.push(new billete(10,50));
caja.push(new billete(5,10));
retirar=buttona.addEventListener('click',retiroEfectivo);
button0.onclick=function(){cantidadRetiro(button0);}
button1.onclick=function(){cantidadRetiro(button1);}
button2.onclick=function(){cantidadRetiro(button2);}
button3.onclick=function(){cantidadRetiro(button3);}
button4.onclick=function(){cantidadRetiro(button4);}
button5.onclick=function(){cantidadRetiro(button5);}
button6.onclick=function(){cantidadRetiro(button6);}
button7.onclick=function(){cantidadRetiro(button7);}
button8.onclick=function(){cantidadRetiro(button8);}
button9.onclick=function(){cantidadRetiro(button9);}
buttonb.onclick=function(){
	p2.innerHTML=p2.innerHTML.slice(0,-1);
	if (p2.innerHTML==""){
		p2.innerHTML="0,00";
	}
}
buttonc.onclick=function(){p2.innerHTML="0,00";}

function cantidadRetiro(boton){
		var a=parseInt(p2.innerHTML);
		p2.innerHTML=a+boton.value;
}
function cajaDisponible(caja)
{
	var disponible=0;
	for (dispo of caja)
	{
		disponible=(dispo.valor*dispo.cantidad)+disponible;
	}
	return disponible;
}
function retiroEfectivo()
{	
	p1.innerHTML=" ";
	cajero=cajaDisponible(caja);
	var b=parseInt(p2.innerHTML);
	if (b<10||b%5!=0)
	{
		p1.innerHTML='Monto no puede ser dispensado.<br/>';
		p2.innerHTML="0,00";
	}else if(b>cajero){
		p1.innerHTML='Cajero no disponible para retiros.<br/>';
		p2.innerHTML="0,00";
	}
	else {
		var i=0;
		while(b!=0)
		{
			billetes=Math.floor(b/caja[i].valor);
			if (billetes>caja[i].cantidad)
			{
				billetes=caja[i].cantidad;
			}else{
				billetes=billetes;		
			}
			b=b-(billetes*caja[i].valor);
			caja[i].cantidad=caja[i].cantidad-billetes;
			if (billetes>0){
				p1.innerHTML=p1.innerHTML+billetes+' Billetes de: '+caja[i].valor+' Bs.<br/>';
			}
			i++;		
		}
	cajero=cajaDisponible(caja);
	p2.innerHTML="0,00";
	}
}
