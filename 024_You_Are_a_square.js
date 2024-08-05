const isSquare = n => n < 0? false : Number.isInteger(+(n));

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(1));
console.log(isSquare(5));
console.log(isSquare(25));
console.log(isSquare("asdaasdn"));
console.log(isSquare("34453"));
console.log(isSquare(""));