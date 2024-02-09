let partlist = arr => {
    let kalimat = [];
    let hasil = [];
    let tampung = "";
    for (let i = 1; i < arr.length; i++){
        console.log(tampung);
        for (let j = 0; j < i; j++){
            if (j != (i-1)){
                tampung += arr[j] + " ";
            }else{
                tampung += arr[j];
            }
        }
        console.log(tampung);
        kalimat.push(tampung);
        tampung = "";
        for (let j = i; j < arr.length; j++){
            if (j != arr.length){
                tampung += arr[j] + " ";
            }else{
                tampung += arr[j];
            }
        }
        kalimat.push(tampung);
        tampung = "";
        hasil.push(kalimat);
        kalimat = [];
    }

    return hasil;
}

/*[
    ["I", "wish I hadn't come"], 
    ["I wish", "I hadn't come"], 
    ["I wish I", "hadn't come"], 
    ["I wish I hadn't", "come"]
]
*/
["I", "wish I hadn't come"], 
["I wish", "I hadn't come"], 
["I wish I", "hadn't come"], 
["I wish I hadn't", "come"]
console.log(partlist(["I", "wish", "I", "hadn't", "come"]));
