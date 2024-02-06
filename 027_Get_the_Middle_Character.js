let getMiddle = s => {
    if (s.length % 2 == 1){
        return s[Math.round(s.length/2)-1];
    }else{
        return s[Math.round(s.length/2)-1] + s[Math.round(s.length/2)];
    }
}

// Ntah kenapa Math.ceil (untut pembulatan ke bawah)gk berkerja

console.log(getMiddle("testing"));
console.log(getMiddle("test"));
