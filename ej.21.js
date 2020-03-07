function suma(number){
  if (number >=1000)
    return 0;
  return number + suma(number + 2);
}

console.log(`Suma de impares: ${suma(1)}`);
console.log(`Suma de impares: ${suma(0)}`);
