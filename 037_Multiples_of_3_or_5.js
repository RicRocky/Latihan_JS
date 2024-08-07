let solution = number => {
    let tampung = 0;
    
    for (let i = 1; i < number; i++){
        if (i % 3 == 0 || i % 5 == 0 ){
            tampung += i;
        }
    }

    return tampung;
}

console.log(solution(10));
console.log(solution(50));
console.log(solution(100));
console.log(solution(200));