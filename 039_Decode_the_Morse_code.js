const mourse_code = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const decodeMorse = function(morseCode){
    let perubahanMorseCode = morseCode.split(" ");
    let count = 0;
    let jawaban = "";
    console.log(perubahanMorseCode);

    for(let i = 0; i < perubahanMorseCode.length; i++){
        if (perubahanMorseCode[i] == " "){
            count++;
        }else if (count == 2){
            count = 0;
            jawaban += " ";
        }else{
            for (let j = 0; j < mourse_code.length; j++){
                if (perubahanMorseCode[i] == morse_code[j]){
                    jawaban += mourse_code[j]
                    break;
                }
            }
        }
    }

    return jawaban;
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));