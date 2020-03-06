function factorial(number) {
  if(number == 0)
    return 1;
  return factorial(number-1)*number;
}
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
function tablamul(number){
	for(var i=1;i<=10;i++){
		console.log(number * i);
		}
	}

console.log("Teclea un numero");
process.stdin.once('data', (chunk) => {
    let num = chunk.toString();
    console.log("--------");
	console.log("Factorial: "+factorial(num));
	if(esPrimo(num))
	  console.log("Si es un numero primo");
	else
	  console.log("No es un numero primo");
	tablamul(num);
	process.exit();
});

