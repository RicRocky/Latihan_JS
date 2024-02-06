// let disemvowel = str => {
//     let vokal = ["a", "i", "u", "e", "o"];
//     let hasil = [];
//     let tampung = 0;
//     let count = 0;

//     for (let i = 0; i < str.length; i++){
//         tampung = 0;
//         for (let j = 0; j < vokal.length;j++){
//             if (str[i] == vokal[j] || str[i] == vokal[j].toUpperCase() ){
//                 tampung++;
//             }
//         }
//         if (tampung != 1){
//             hasil[i - count] = str[i];
//         }else{count++;}
//     }
//     tampung = "";
//     for (let i = 0; i < hasil.length; i++){
//         tampung += hasil[i];
//     }

//     return tampung;
// }

let disemvowel = str => {
    let vokal = ["a", "i", "u", "e", "o"];
    let hasil = [];
    let tampung = 0;
    let count = 0;

    for (let i = 0; i < str.length; i++){
        tampung = 0;
        for (let j = 0; j < vokal.length;j++){
            if (str[i] == vokal[j] || str[i] == vokal[j].toUpperCase() ){
                tampung++;
            }
        }
        if (tampung != 1){
            hasil[i - count] = str[i];
        }else{count++;}
    }

    return hasil.join("");
}

console.log(disemvowel("This website is for losers LOL!"));