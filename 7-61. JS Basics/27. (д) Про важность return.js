"use strict";

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

/* promotion(convert(500, usdCurr)); */
/* convert(500, usdCurr);
convert(500, eurCurr); */
/* оба способа будут верные */

/* любой код после return Работать не будет */


function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();
/* 
0
1
2
3
*/
/* здесь ключевую роль играет return он работает как
break т.е. после него ничего выводиться даже наша
надпись Done */



function doNothing() {};
console.log(doNothing());
/* undefined */
/* все функции всегда что то возвращают */

console.log(11);
/* 11 
undefined
тольуо в браузере такое может быть
потомучто console.log()
это тоже функция*/



/* после return никогда нельзя ставить перенос строки
т.е. так 
return
 1+ 2 
 делать нельзя
 return 1+2 можно*/



 
// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`

}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    let res = []
    res[0] = num - 1
    res[1] = num
    res[2] = num + 1
    return res

}

// Место для третьей задачи
function getMathResult(a, b) {
    let res = '';
    let count = a;
    if (b > 0){
    for (let i = 1; i <= b; i++) {
        res += `${count}---`;
        count += a;
    }
    res = res.slice(0, -3);} 
    /* вырезаем не нужные минуса способом индекса */
    else {
        res = a;
    }
    return res;    
}