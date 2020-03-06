var i=0;
var max=-100000000000000;
var min=100000000000000;
var num=process.openStdin();
console.log("Introduce un numero");
num.on('data', function(chunk){
		if(chunk>max){
			max=chunk;
			}
		if(chunk<min){
			min=chunk;
			}
		if(i==4){
			console.log("El mayor es: "+max+"El menor es: " +min);
			process.exit();
			}
		i++;
		console.log("Escribe el siguiente numero:");
	});
