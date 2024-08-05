// let descendingOrder = n => {
//     let angka = n.toString().split("");
//     let count = 0;
//     let tampung = [];

//     for (let i = 0; i < angka.length; i++){
//         angka[i] = parseInt(angka[i]);
//     }
    
//     for (let i = 0; i < angka.length; i++){
//         count = 0;
//         tampung[i] = Math.max(...angka);
//         for (let j = 0; j <angka.length; j++){
//             if (angka[j] == tampung[i] && count == 0){
//                 angka[j] = 0;
//                 count++;
//             }
//         }
//     }

//     return parseInt(tampung.join(""));
// }

const descendingOrder = n => parseInt(String(n).split("").sort().reverse().join(""));


console.log("ikan");
console.log(0);

console.log(descendingOrder(0));
console.log(descendingOrder(42145));