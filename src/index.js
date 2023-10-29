module.exports = 
function toReadable (number) {
        const numbers = {
            0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine'
          }
          
          const tens = {
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety'
          }

          let result ='';

          let strNumber = String(number);

          if (strNumber.length === 3) {
            result += numbers[Number(strNumber[0])] + ' hundred';
            if (number % 100 === 0) { return result }
            result += ' ';
            strNumber = strNumber.slice(1);
        }
        if (strNumber.length === 2) {
            if (strNumber[0] == 1) { result += tens[Number(strNumber)]; return result; } // число от 11 до 19
             else if (strNumber[0] == 0) { strNumber = strNumber.slice(1)} 
             else  if (strNumber[1] == 0) {
                result += tens[Number(strNumber)];
                return result;                                                          // число ровные десятки
            }                
                else if (strNumber[1] != 0) { 
                    result += tens[Math.floor(Number(strNumber)/10)*10];
                    strNumber = strNumber.slice(1)
                    result += ' ';
                } 

        }
        result += numbers[Number(strNumber)];
        return result;  
    
}


