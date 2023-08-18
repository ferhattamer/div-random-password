function giris()
{
	var kullanici=document.getElementById("kullaniciAdi").value;
	var sfr=document.getElementById("sifre").value;
	if(kullanici=="admin" && sfr=="123")
	{
		alert("Giriş Başarılı :)");
		window.location.href=window.location.href='divolustur.html';
	}
	else{
		alert("Giriş Başarısız!!");
	}
}
