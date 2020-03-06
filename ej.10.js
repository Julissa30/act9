console.log("Teclea un numero");
process.stdin.once('data', (chunk) => {
    let num = chunk.toString();
    console.log("--------");
    if(num%2==0){
		console.log("Par");
		process.exit();
		}
	if(num%2!=0){
		console.log("Impar");
		process.exit();
		}

});

