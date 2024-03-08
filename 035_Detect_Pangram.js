// let isPangram = string => {
//     let huruf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//     let count = 0;
//     for (let i = 0; i < string.length; i++){
//         for(let j = 0; j < huruf.length; j++){
//             if (string[i].toLowerCase() == huruf[j]){
//                 huruf[j] = "";
//                 count++;
//                 j = huruf.length;
//             }
//         }
//     }
//     if (count == huruf.length) {return true;}
//     else{return false;}
// }



let miaw = "The quick brown fox jumps over the lazy dog";

console.log(isPangram(miaw));