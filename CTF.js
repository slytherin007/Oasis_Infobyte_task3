function convert(){
	var get_option = document.getElementById("temp_conv");
	var text=get_option.options[get_option.selectedIndex].value
	var num=document.getElementById("datahere").value
	var F
	if (text=='Fahrenheit') {
		F=(parseFloat(num)*1.8)+32
		F=Math.round(F)
		document.getElementById("result").innerHTML="Temperature in Fahrenheit is: "+F
	}
	else{
		var C=(parseFloat(num)-32)*5/9
		C=Math.round(C)
		document.getElementById("result").innerHTML="Temperature in Celsius is: "+C
	}
}