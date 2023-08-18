function kutuyarat(){
	document.getElementById("kutu").style.width=document.getElementById("genislik").value+"px";
	document.getElementById("kutu").style.height=document.getElementById("yukseklik").value+"px";
	document.getElementById("kutu").style.borderWidth=document.getElementById("kenarkalinlik").value;
	document.getElementById("kenarkalinlik").style.borderWidth=document.getElementById("kenarkalinlik").value;
	document.getElementById("kutu").style.borderStyle=document.getElementById("kenartipi").value;
	document.getElementById("kenartipi").style.borderStyle=document.getElementById("kenartipi").value;
	document.getElementById("kutu").style.borderColor=document.getElementById("kenarrengi").value;
	document.getElementById("kenarrengi").style.borderColor=document.getElementById("kenarrengi").value;
	document.getElementById("kutu").style.backgroundColor=document.getElementById("arkarenk").value;
	document.getElementById("arkarenk").style.backgroundColor=document.getElementById("arkarenk").value;
	document.getElementById("kutu").style.borderRadius=document.getElementById("ovallik").value;
}