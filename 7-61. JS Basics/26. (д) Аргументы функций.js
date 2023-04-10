"use strict";

const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);
/* 14000 */
/* лучше делать так что в скобках вызова 
функции мы передаем переменную
а внутри функции мы уже создаем аргумент 
катарая принимает
значение и работает только в этой функции */