// let isIsogram = str => {
//     let vokal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//     let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     let tampung = 0;

//     for (let i = 0; i < str.length; i++){
//         for (let j = 0; j < vokal.length; j++){
//             if (str[i] == vokal[j] || str[i] == vokal[j].toUpperCase() ){
//                 count[j] += 1;
//             }
//         }
//     }

//     for (let i = 0; i < count.length; i++){
//         if (count[i] >= 2){
//             tampung = count[i];
//         } 
//     }

//     return tampung > 1? false: true;
// }

let isIsogram = str => {
    let vokal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < vokal.length; j++){
            if (str[i] == vokal[j] || str[i] == vokal[j].toUpperCase() ){
                count[j] += 1;
            }
        }
    }

    return Math.max(...count)> 1? false: true;
}

console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));
console.log(isIsogram("asdfkjhgqpowieurytmznxbcv"));