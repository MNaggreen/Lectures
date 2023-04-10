/* оператор нулевого слияния */
/* он выглядит как ?? знака */
'use strict';
/* оператор нулевого слияния */
/* он выглядит как ?? знака */
const box = document.querySelector('.box');
/* выбираеям тег по классу */

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    /* 0 */
    /* аналог h || 200 но тогда из 
    функции надо удалить при вызове два последних  
    newHeight, newWidth
    и если h будет равно 0 то 200 тоже подставится
    но вслучае ?? будет стоять 0*/
    
    elem.style.width = `${w ?? 200}px`;
    /* задаем параметры нашему тегу */
    elem.innerHTML = (h ?? 200) * (w ?? 200);
    /* команда выше просто вставит текст в наш тег выше 4000 */
}

changeParams(box, newHeight, newWidth);

let userName;/* undefined */
let userKey = null;
console.log(userName ?? userKey ?? 'User');
/* оператор ?? работает только с null и undefined 
если в первом аргумете userName будет возвращем
null undefined то оператор возвразает сразу второй аргумент user
*/


/* приоритет на равне с оператормом || */




console.log(userName && userKey ?? 'User');
/* так делать нельзя! */