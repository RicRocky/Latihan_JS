function catMouse(map,moves){
    let posisi = [];
    let count = 0;
    let karakter = 0;
    
    for (let i = 0; i < map.length; i++){
      if (map[i] == "C" || map[i] == "m"){
        posisi[i-count] = i;
        karakter++;
      }else{
        count++;
      }
    }
    
    if (karakter != 2) {
        return "boring without two animals";
    }
    
    let posisiM = 0;
    
    posisiM = map[posisi[1]] == "m"? map.length - posisi[1]: map.length - posisi[0];
    
    
    
    
    console.log(posisi);
    console.log(map.length);
    console.log(map[24]);
  }

// Cat and Mouse - 2D Version
// https://www.codewars.com/kata/57f8842367c96a89dc00018e/train/javascript