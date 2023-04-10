'use strict';
let number = 5;
function logNumber() {
    /* let number = 4;  */
    console.log(number);
}
number = 6;
logNumber();
/*6 (либо 4 если number стоит внутри функции у него приоритет)
потому что функция была вызвана после изменения number*/
/* Это называется лексическое окружение
это окружение можно просмотреть в source
а далее Scope*/

/* каждый вызов функции это создание лексического окружения
со всеми параметрами
и также после того как фукция выполнена её лексческое окружение 
удаляется */

/* Дальше новый пример */
function createCounter() {
    let counter = 0;
    const myFunction = function() {
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log(increment, c1, c2, c3);
/* [Function: myFunction] 1 2 3 */
/* замыкание это когда функция запоминает свои переменные*/

{
    let msg = 'Hello';
}
console.log(msg);
/* тут будет ошибка так как мы вызываем функцию вне лексического окружения */
/* Лексическое окружение это место вокруг функции или обекта (обычно скобки)
где функция или обьект доступны обычно
 */




for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        let num = 3;
    }
    console.log(num);
    /* тут будет ошибка так как мы вызываем переменную
    которая вызвана и существует только внутри второго цикла */
}