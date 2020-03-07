var cont=0;
var i=0;
console.log("escribe el numero 1");
var registro=1;
var i=0;
var c=0;
var n1=0;
var n2=0;
var mayor=0;
var menor=0;
var sumImp=0;
var contPar=0;
var numero=process.openStdin();
numero.on('data', function(chunk) {

  if(registro==2){
    n2=chunk;
    if(n1>n2){
      mayor=n1;
      menor=n2;
    }else {
      mayor=n2;
      menor=n1;
    }
  for (i = menor; i <= mayor; i++) {
    console.log("el numero es "+i);
    c++;
    if(i%2==0){
      contPar++;
    }else {
      sumImp+=i;
    }
  }
  console.log("la cantidad de numeros fue "+c);
  console.log("la cantidad de pares fue "+contPar);
  console.log("la suma de impares fue "+sumImp);
  }else {
    n1=chunk;
  }
  registro++;
  console.log("escribe el numero "+registro);
});
