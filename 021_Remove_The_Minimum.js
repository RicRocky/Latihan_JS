'use strict';
// let removeSmallest = numbers => {
//     let tampung = [];
//     let angka = numbers[0];
//     let indexAngka = 0;
//     let count = 0;
//     for (let i = 0 ; i < numbers.length; i++){
//       if (angka > numbers[i]){
//         angka = numbers[i];
//         indexAngka = i;
//       }
//     }
    
//     for (let i = 0; i < numbers.length; i++){
//       if (indexAngka == i){
//         count+= 1;
//       }else if (count == 1){
//         tampung[i-1] = numbers[i];
//       }else{
//         tampung[i] = numbers[i];
//       }
//     }
//     return tampung;
// }

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 4, 3, 2, 1]));
console.log(removeSmallest([5, 3, 2, 1, 4]));