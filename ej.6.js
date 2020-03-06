console.log("Teclea el numero maximo");
process.stdin.once('data', (chunk) => {
    let num = chunk.toString();
    console.log("--------");
    for(var i=1; i<=num;i++){
	console.log(i);
	}
	process.exit();
});
