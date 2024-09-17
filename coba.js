let blmRapi = [60, 20, 15, 88, 34, 45, 59, 51, 23, 90, 22];
let arrNumber = [15, 20, 22, 23, 34, 45, 51, 59, 60, 88, 90];

let key = 20;


let MencariKey = (pKey, arr) =>{
    let first = arr[0];
    console.log(first);
    let last = arr[arr.length-1];
    console.log(last);
    let middle = 0;
    let count = 0;

    let updateLast = 0;
    let updateFirst = 0;

    while (count == 99){
        if (first < pKey){
            updateLast = (arr.length - 1) - Math.round(arr.length/2, 0);
            last = arr[updateLast];
            
        }else{
            count = 99;
        }
    }

    return last;
}

console.log(MencariKey(key, arrNumber))