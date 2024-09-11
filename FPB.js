let MencariFPB = arrAngka => {
    let panjangArrAngka = [];
    let jawaban = 1;

    // Mencari Urutan Angka
    for (let i = 0; i < arrAngka.length; i++){
        panjangArrAngka[i] = i;
    }

    console.log(panjangArrAngka)
    
    for (let i = 1; i < Math.max(...arrAngka); i++){
        if(arrAngka[panjangArrAngka[0]] % i == 0 && 
            arrAngka[panjangArrAngka[1]] % i == 0 && 
            arrAngka[panjangArrAngka[2]] % i == 0)
        {
            arrAngka[panjangArrAngka[0]] /= i;  
            arrAngka[panjangArrAngka[1]] /= i; 
            arrAngka[panjangArrAngka[2]] /= i;
            jawaban *= i; 
            i = i - 1;
        }
        console.log(i);
    }

    console.log(jawaban);

    return jawaban;
}

console.log(MencariFPB([10, 8, 6]));
console.log(MencariFPB([10, 8, 12]));