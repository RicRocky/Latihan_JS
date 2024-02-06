// https://www.codewars.com/kata/546dba39fa8da224e8000467/train/javascript
// Dikitttt lagi kelarr noooooooooooooooooooooo

let runLengthEncoding = str => {
    let vokal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", " " ];
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let tampung = 0;
    let kata = [];
    let indexCount = [];
    let arrTotal = [];

    // Error logic
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < vokal.length; j++){
            if (str[i] == vokal[j]){
                count[j] += 1;
                if (count[j] == 1){
                    indexCount[i-tampung] = j;              
                    kata[i-tampung] = vokal[j];
                }else{
                    tampung++;
                }
            }
        }
    }

    // Huruf besar harus bisa jadi output berbeda 
    // for (let i = 0; i < str.length; i++){
    //     for (let j = 0; j < vokal.length; j++){
    //         if (str[i] == vokal[j].toUpperCase()){
    //             count[j] += 1;
    //             if (count[j] == 1){
    //                 indexCount[i-tampung] = j;              
    //                 kataBesar[i-tampung] = vokal[j].toUpperCase();
    //             }else{
    //                 tampung++;
    //             }
    //         }
    //     }
    // }

    console.log(kata);
    console.log(vokal.length);
    console.log(count.length);
    console.log(count);
    console.log(vokal);
    console.log(indexCount);

    for (let i = 0; i < kata.length; i++){
        arrTotal.push(Array(count[indexCount[i]], kata[i]));             
    }

    return arrTotal;
}

// console.log(runLengthEncoding("aba"));
// console.log(runLengthEncoding("ssssssssssssssssssssssssssssssssssssssss"));
// console.log(runLengthEncoding("mose"));
// console.log(runLengthEncoding("issogram"));
console.log(runLengthEncoding("Hello World !"));    // Salah, Error logic