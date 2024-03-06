// let isRubyComing = list => {
//     for (let i = 0; i < list.length; i++){
//         if (list[i].language == "Ruby"){return true};
//     }
// }

const isRubyComing = list => list.some(a => a.language == "Ruby");

let list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

console.log(isRubyComing(list1));

// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?]