let makeCocktail = (ing, fl, bs) => {
    let jawaban = [];
    let flavour = 0;
    

    for (let data in ing){
        flavour += ing[data];
    }

    if (flavour > 0){
        jawaban[0] = ing;
        jawaban[1] = flavour; 
        jawaban[2] = flavour; 
    }

    return jawaban;
}


const ingr = {
    Mormodica   : -6,
    Liquor      : -4,
    Vodka       : -2,
    Orange      :  2,
    Watermelon  :  4,
    Sugar       :  6
};
const allFlav     = [2, -2, 3, 1, 16];
const allBittersw = [6,  6, 2, 6,  0];

console.log(makeCocktail(ingr, allFlav, allBittersw));