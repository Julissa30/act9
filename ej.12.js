var impsum=0;
var parsum=0;
var arrpar=[];
var arrimp=[];
      for(var i=1; i<=100;i++){
			if(i%2==0){
			arrpar.push(i);
			parsum+=i;
			}
			if(i%2!=0){
			arrimp.push(i);
			impsum+=i;
			}
		}
	console.log("Los numeros pares son:")
	console.log(arrpar);
	console.log("La suma es: "+parsum);
	console.log("Los numeros impares son:")
	console.log(arrimp);
	console.log("La suma de los numeros pares es: "+impsum);





