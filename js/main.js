var a=prompt("Enter a value");
var b=prompt("Enter b value");
var c=prompt("Enter c value");
if((a>b)&&(a>c))
	{
		if(b>c){
			document.write(a+" "+b+" "+c);
		}
		else{
			document.write(a+" "+c+" "+b);
		}
	}
	if((b>a)&&(b>c))
	{
		if(a>c){
			document.write(b+" "+a+" "+c);
		}
		else{
			document.write(b+" "+c+" "+a);
		}
	}
	if((c>a)&&(c>b))
	{
		if(a>b){
			document.write(c+" "+a+" "+b);
		}
		else{
			document.write(c+" "+b+" "+a);
		}
	}