const func = require('./func_long');

console.log(func('qweqrty')); // 6 (подстрока weqrty)
console.log(func('abdfehueily')); //  6 (подстрока dfehue)
console.log(func('')); //0 (пустая строка)
console.log(func('abcdeef')); // 5 abcde