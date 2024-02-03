// https://www.codewars.com/kata/546dba39fa8da224e8000467/train/javascript
// Dikitttt lagi kelarr noooooooooooooooooooooo

let isIsogram = str => {
    let vokal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let indexCount = [];
    let tampung = 0;
    let arrTotal = [];

    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < vokal.length; j++){
            if (str[i] == vokal[j] || str[i] == vokal[j].toUpperCase() ){
                count[j] += 1;
            }
        }
    }

    for (let i = 0; i < count.length; i++){
        if (count[i] > 0){indexCount[i-tampung] = i;}
        else{tampung++}
    }

    console.log(count);
    console.log(indexCount);

    for (let i = 0; i < indexCount.length; i++){
        arrTotal[i][0] = count[indexCount[i]];
        arrTotal[i][1] = vokal[indexCount[i]];
    }

    return arrTotal;
}

console.log(isIsogram("aba"));
// console.log(isIsogram("ssssssssssssssssssssssssssssssssssssssss"));
// console.log(isIsogram("mose"));
// console.log(isIsogram("issogram"));
// console.log(isIsogram(""));