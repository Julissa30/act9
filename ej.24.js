function esPrimo(number){
  if(number>1){
    for (var i = 2; i < number; i++) {
      if (number % i == 0)
        return false;
    }
    return true;
  }
  else
    return false;
}



console.log("Teclea un numero");
process.stdin.once('data', (chunk) => {
    let num = chunk.toString();
    console.log("--------");
    if(esPrimo(num)){
  console.log("Si es un numero primo");
	process.exit();
	}	
	else{
	console.log("No es un numero primo");
	process.exit();
}
});
