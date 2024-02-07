let sum = (a,b) => {                        // Currying and Partial Functions in JavaScript
    if (arguments.length == 2){
        return a + b;
    }else{
        return function(b) {
            return a + b;
        }  
    }  
}

console.log(sum(3,3));
console.log(sum(3)(3));

// Name = More than one way to call a function, or skin a cat