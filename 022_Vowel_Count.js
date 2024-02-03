let getCount = str => {
    let vokal = ["a", "e", "i", "o", "u"];
    let count = [0, 0, 0, 0, 0,]
    let tampung = 0;

    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < vokal.length; j++){
            if (str[i] == vokal[j]){
                count[j] += 1;
            }
        }
    }

    for (let i = 0; i < count.length; i++){
        tampung += count[i];
    }

    return tampung;
}

// let getCount = str => {
//     let vokal = ["a", "e", "i", "o", "u"];
//     let count = [0, 0, 0, 0, 0,]

//     for (let i = 0; i < str.length; i++){
//         for (let j = 0; j < vokal.length; j++){
//             if (str[i] == vokal[j]){
//                 count[j] += 1;
//             }
//         }
//     }

//     return count.reduce((a, b) => a + b, 0);
// }

  console.log(getCount("abracadabrasdeeref"));