'use strict';

/* Интерполяция это когда прямо внутри
 строки мы можем вставлять значение переменной */
const category = 'toys';
console.log(`https://someurl.com/${category}/5`);
/* такое работает только когда мы используем косые
 ковычки буква Ё на клвиатуре */
/* вывод https://someurl.com/toys/5 */

const user = 'Ivan';
alert(`Привет, ${user}`);
/* Привет, Ivan */
