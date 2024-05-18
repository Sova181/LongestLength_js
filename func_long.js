function getLongestLength(str){
    let longestLength = 0; 
    let currentSubstr = '';

    for(let i = 0; i <str.length; i++){
        let currentSymbol = str[i]; // Текущий символ
    let symbolIndex = currentSubstr.indexOf(currentSymbol); //индекс текущего символа в текущей подстроке

    if(symbolIndex === -1){
        currentSubstr += currentSymbol; //добавляем симол в текущую подстроку
        longestLength = Math.max(longestLength, currentSubstr.length);
    } else { 
       // Если символ уже встречался, начинаем новую подстроку после повторяющегося символа
        currentSubstr = currentSubstr.slice(symbolIndex + 1) + currentSymbol;
    }
    }
    return longestLength;
} 

module.exports = getLongestLength