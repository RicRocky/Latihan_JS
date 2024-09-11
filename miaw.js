var localeDate     = (new Date()).toLocaleDateString(); // "8/16/2021"
let arrData = [
    ["Arya", "8/8/2024"],
    ["Ricky" , "12/8/2024"], 
    ["Krisna", "13/5/2024"], 
    ["Miaw", "8/8/2024"],
];
let arrUltah = [];

for (let i = 0; i < arrData.length; i++){
    if (arrData[i][1] === localeDate){
        arrUltah[arrUltah.length] = arrData[i];
    }
}

console.log(arrUltah);