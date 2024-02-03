const isSquare = n => n < 0? false : Number.isInteger(Math.sqrt(n));

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(1));
console.log(isSquare(3));
console.log(isSquare(25));