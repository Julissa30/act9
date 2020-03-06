var c=0;
console.log("Escribe una frase");
var frase=process.openStdin();
frase.on('data', function(chunk) {
  c++;
  console.log("Levas: "+ c +" frases, Introduce una nueva o presiona CTRL+C para salir ");
 });
