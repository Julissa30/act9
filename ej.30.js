console.log("escribe el numero 1");
var registro=1;
var n1=0;
var n2=0;
var sum=0;
var res1=0;
var res2=0;
var div=0;
var div2=0;
var mul=0;
var numero=process.openStdin();
numero.on('data', function(chunk) {

  if(registro==2){
  n2=chunk;
  console.log("-------");
  console.log("El primer numero es: " +n1 + " El segundo numero es: " +n2);
  
  console.log("-----");
	sum=(1*n1)+(1*n2);
	res=n2-n1;
	res2=n1-n2;
	mul=n1*n2;
	div=n1/n2;
	div2=n2/n1
	
  console.log("Suma=  "+ sum);
  console.log("Resta n2-n1=  "+res);
  console.log("Resta n1-n2=  "+res2);
  console.log("Multiplicacion=  " +mul);
  console.log("Division n1/n2=  "+div);
  console.log("Division n2/n1=  "+div2);
  process.exit();
  }else {
    n1=chunk;
  }
  registro++;
  console.log("escribe el numero "+registro);
});
