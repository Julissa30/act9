console.log("Teclea S o N");
process.stdin.once('data', (chunk) => {
    let x = chunk.toString();
    console.log("--------");
    if(x=="S\n" || x=="N\n"){
		console.log("Correcto");
		process.exit();
		}
	else{
		console.log("Incorrecto");
		process.exit();
		}
});
