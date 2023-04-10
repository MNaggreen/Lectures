const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) === 'string') {
    let copy = str.split();
    /* console.log(copy[0][-2]); */
    /* отрицательные индексы почему то не работают */
    let res = '';
    for (let i = str.length-1; i > -1; i--) {
        res += copy[0][i];
    }
    return res; } else {
        return "Ошибка!";
    }
}
/* console.log(reverse(someString)); */

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length > 0) {
    for (let i in arr) {        
        if (arr[i] === missingCurr ) {
            let ans = arr.indexOf(i);
            arr.splice(ans, 1);
        }
    }
    let res = "Доступные валюты:\n";
    for (let i = 0; i < arr.length; i++){
        res += (' ' + arr[i]).trim();
        /* мы убрали пробел с помощью объединения в скобки нашей строки */
        res += '\n';
        /* нужно чтобы перенос был в конце каждой строки иначе тест не пройдет */
    } 
    
    return res;} else {
        return 'Нет доступных валют';
    }
}
/* console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')); */