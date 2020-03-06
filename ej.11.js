var cont=0;
console.log("Teclea el numero maximo");
process.stdin.once('data', (chunk) => {
    let num = chunk.toString();
    console.log("--------");
    for(var i=1; i<=num;i++){
		if(i%3==0){
			console.log(i);
			cont=cont+1;
			}
		}
	console.log("Son: " + cont + " multiplos de tres en el intervalo de 1 a " + num);
	process.exit();
});

