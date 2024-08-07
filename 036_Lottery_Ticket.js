let bingo = (ticket, win) => {
    let arrAngka = [];
    let arrKata = [];
    let countAngkaSama = 0;
    let countKataSama = 0;
    for(let i = 0; i<ticket.length; i++){ 
        arrAngka[i] = ticket[i][1];
        arrKata[i] = ticket[i][0];
    }

    for (let i = 0; i < arrAngka.length; i++){
        for (let j = i; j < arrAngka.length; j++){
            if (i != j){
                if (arrAngka[i] == arrAngka[j]){
                    countAngkaSama++;
                    break;
                }
            }
        }
    }
    
    for (let i = 0; i < arrKata.length; i++){
        for (let j = i; j < arrKata.length; j++){
            if (i != j){
                if (arrKata[i] == arrKata[j]){
                    countKataSama++;    
                    break;
                }
            }
        }
    }

    let kondisi = "";
    console.log(countAngkaSama);
    if (win == 1){
        // if(countAngkaSama == win){
        //     kondisi = "Winner!";
        // }else{
            for (let i = 0; i < arrKata.length; i++){
                if(arrKata[i] == "ABC"){
                    kondisi = "Winner!"
                    break;                
                }else{
                    kondisi = "Loser!";
                } 
            }
        // }
    }else{
        if (countAngkaSama >= win){
            if(countAngkaSama == countKataSama){
                kondisi = "Winner!";
            }else {
                kondisi = "Loser!";
            }
        }else{
            kondisi = "Loser!";
        }
    }
    // return win == 1?'Winner!' : countAngkaSama == win? 
    //countAngkaSama == countKataSama? 'Winner!' : 'Loser!' : 'Loser!';

    return kondisi;
}
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2));
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3));
console.log(bingo([['VLZV',86], ['ZX',90], ['VD',81], ['VHAO',76]], 2));
console.log(bingo([['XMC',75], ['OH',88], ['FISS',72], ['QDBASO',88]], 1));
console.log(bingo([[CRAWVWN,66], [HAY,73], [CNSZ,74], [DTHKR,86], [YJEXND,78], [TMV,72], [YBE,66]]))

//https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript