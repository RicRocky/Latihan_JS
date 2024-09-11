const MembuatSnakeCase = (urutan, kalimat) => {
    let arrKata = kalimat.split(" ");
    let kalimatSnakeCase = "";

    for(let i = 0; i < arrKata.length; i++){
        if ( i == arrKata.length-1){
            kalimatSnakeCase += arrKata[i];
        }else{
            kalimatSnakeCase += arrKata[i] + "_";
        }
    }

    return urutan + "_" + kalimatSnakeCase +".js";
}

console.log(MembuatSnakeCase('040', "Prepare the Cocktails"));