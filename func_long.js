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

console.log(getLongestLength('qweqrty')); // 6 (подстрока 'weqrty')
console.log(getLongestLength('abdfehueily')); //  6 (подстрока 'dfehue')
console.log(getLongestLength('')); //0 (пустая строка)
console.log(getLongestLength('abcdeef')); // 5