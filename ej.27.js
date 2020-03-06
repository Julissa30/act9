function tablamul(number){
	for(var i=1;i<=10;i++){
		console.log(number * i);
		}
	}

console.log("Teclea un numero");
process.stdin.once('data', (chunk) => {
    let num = chunk.toString();
    console.log("--------");
	tablamul(num);
	process.exit();
});
