let comp = (array1, array2) => {
    let kondisi = "Sama";
    if (array1 == null || array2 == null){return false;}

    for (let i = 0; i < array1.length; i++){
        if (array1[i]*array1[i] != array2[i]){kondisi = "Tidak Sama";}
    }

    if (kondisi == "Tidak Sama"){
        let countBerhasil = 0;
            for(let i = 0; i < array1.length; i++){
                let nilaiArray1 = array1[i] * array1[i];
                for(let j = 0; j < array2.length; j++){
                    if(nilaiArray1 == array2[j] ){
                        countBerhasil++;
                        array2[j] = undefined;
                        j = array2.length;
                    }
                }
            }
        if (countBerhasil != array1.length) {return false;}

        let countRandom = 0;
        for (let i = 0; i < (array1.length - 1); i++){
            let nilaiArr = array1[i] * array1[i];
            if (nilaiArr != array2[i+1]){countRandom++;}
        }
        if ((array1[array1.length-1] * array1[array1.length-1]) != array2[0] ){countRandom++;}

        if (countRandom <= 0 ) {return false;}
    }else{
        for (let i = 0; i < array1.length; i++){
            if ((array1[i] * array1[i]) != array2[i]){
                return false;
            }
        }
    }
    return true;
}
let b1 = [2, 2, 3];
let b2 =  [4, 9, 9];

console.log(comp(b1, b2));

// function comp(a, b) {
//     return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
//   }

// Bisa sesingkat ini, okeh terimakasih :)


//Are they the "same"?