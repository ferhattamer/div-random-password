function uret(){
	var sayilar=
	["0","1","2","3","4","5","6","7","8","9"];
	var yeniRenk="#";
	var x=0;
	while(x<6){
		var y=Math.round(Math.random()*9);
		var z=sayilar[y];
		yeniRenk = yeniRenk+z;
		x++;
	}
	document.getElementById("kutu").style.backgroundColor=yeniRenk;
	document.getElementById("cikis").innerHTML=yeniRenk;
	}
	