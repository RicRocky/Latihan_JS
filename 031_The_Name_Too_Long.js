let countDevelopers = list => {
    let count = 0;
    for (let i = 0; i < list.length; i++){
        if (list[i].continent == "Europe" && list[i].language == "JavaScript") {count++}
    }

    return count;
}

const maw = [
    {"firstName":"Sofija","lastName":"Q.","country":"Latvia","continent":"Europe","age":29,"language":"Ruby"},{"firstName":"Nareh","lastName":"Q.","country":"Armenia","continent":"Europe","age":30,"language":"Clojure"},{"firstName":"Liam","lastName":"D.","country":"Faroe Islands","continent":"Europe","age":28,"language":"Python"},{"firstName":"Oliver","lastName":"P.","country":"Wales","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Agustin","lastName":"V.","country":"Uruguay","continent":"Americas","age":19,"language":"JavaScript"},{"firstName":"Luka","lastName":"J.","country":"Slovenia","continent":"Europe","age":29,"language":"Clojure"}
];

console.log(countDevelopers(maw));