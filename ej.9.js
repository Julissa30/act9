console.log("Teclea un numero");
process.stdin.once('data', (chunk) => {
    let num = chunk.toString();
    console.log("--------");
    if(num>=0){
		console.log("Positivo");
		process.exit();
		}
	else{
		console.log("Negativo");
		process.exit();
		}

});

