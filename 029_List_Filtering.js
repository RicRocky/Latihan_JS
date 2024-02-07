let filter_list = l => {
    let tampung = [];
    let count = 0;
    for (let i = 0; i < l.length; i++){
        if (Number.isInteger(l[i])){
            tampung[i - count] = l[i];
        }else{
            count++;
        }
    }
    console.log(tampung)
    console.log(count)
    return tampung;
}
/* 
    function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
    }
*/
console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));