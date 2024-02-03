// https://www.codewars.com/kata/546dba39fa8da224e8000467/train/javascript
// Dikitttt lagi kelarr noooooooooooooooooooooo

let runLengthEncoding = str => {
    let vokal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")" ];
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let kata = [];
    let indexCount = [];
    let tampung = 0;
    let arrTotal = [];

    for (let i = 0; i < str.length; i++){
        tampung = 0;
        for (let j = 0; j < vokal.length; j++){
            if (str[i] == vokal[j] || str[i] == vokal[j].toUpperCase() ){
                count[j] += 1;
                tampung++;              // error logic
            }
        }
        if (tampung == 1) {              // error logic
            indexCount = i;              // error logic
            kata[i] = vokal[i];              // error logic
        }
    }

    console.log(vokal.length);
    console.log(count.length);
    console.log(count);
    console.log(vokal);
    console.log(indexCount);

    for (let i = 0; i < indexCount.length; i++){
        arrTotal.push(Array(count[indexCount[i]], kata[i]));              // error logic
    }

    return arrTotal;
}

// console.log(runLengthEncoding("aba"));
// console.log(runLengthEncoding("ssssssssssssssssssssssssssssssssssssssss"));
console.log(runLengthEncoding("mose"));
// console.log(runLengthEncoding("issogram"));
// console.log(runLengthEncoding("Hello World !"));