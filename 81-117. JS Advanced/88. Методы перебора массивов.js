/* как перебираеть элементы массива полученного с сервера */
'use strict';

/* 1 FILTER */
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
const shortNames = names.filter((name) => {
    /* данный метод работает так же как и
    forEach под name будут разные перменные
    по порядку как в цикле */
    
    return name.length < 5;
    /* возвращаем только те чьё имя меньше 6 символов  тут можно также
    подставить if*/ 
});
console.log(shortNames);
/* [ 'Ivan', 'Ann' ] */




/* 2 MAP переписать массив и изменить каждый элемент внутри него */
const answers = ['IvAn', 'AnnA', 'Hello'];
const result = answers.map(item => {
    return item.toLowerCase();
});
/* const result = answers.map(item => item.toLowerCase()); аналог */
console.log(result);
/* [ 'ivan', 'anna', 'hello' ] */





/* 3 some если какой нибудь элем подхотих по условие
то данный метож возвращает true */

const some = [4, 'qwq', 'sfreferf'];

console.log(some.some(item => typeof(item) === 'number'));
/* true */













/* 4 every если все элементы массива проходят данное условие
то этот метод срабатывает */

const every = [4, 'qwq', 'sfreferf'];

console.log(every.every(item => typeof(item) === 'number'));
/* false */











/* 5 reduce схлопывать или собирать массив в одно единое целое */

const arr = [4, 5, 1, 2, 3, 6];

const res = arr.reduce((sum, current) => sum + current);
                      /*    0      4
                         4      5
                         9      1
                         10     3 */
                    /* sum это счетчик, current это непосредственно каждый элемент */
console.log(res);
/* 21 */

const arr1 = ['apple', 'pear', 'plum'];

const res1 = arr1.reduce((sum, current) => `${sum}, ${current}`);
                        /* sum это счетчик, current это непосредственно каждый элемент */
console.log(res1);
/* apple, pear, plum */




/* можно передать начальное значение для reduce */

const arr2 = ['apple', 'pear', 'plum'];

const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`, 'banana');/*  banana стартовое значение */
                        /* sum это счетчик, current это непосредственно каждый элемент */
console.log(res2);
/* banana, apple, pear, plum */














/* применяем знания на практике */
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj);
console.log(newArr);/* получаем матрицу массив в массиве */
/* 
[
  [ 'ivan', 'persone' ],
  [ 'ann', 'persone' ],
  [ 'dog', 'animal' ],
  [ 'cat', 'animal' ]
]
*/
console.log(Object.entries(obj).filter(item => item[1] === 'persone'));
/*  [ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ] */

console.log(Object.entries(obj).filter(item => item[1] === 'persone')
                               .map(item => item[0]));
/*  [ 'ivan', 'ann' ] */


/* мы всегда получаем новый массив + можно использовать цепочку */