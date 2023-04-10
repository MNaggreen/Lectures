/* JS  это высокоуровневый язык
работа с оперативной амятью и т.д.
реализована для нас */
/* js интерпритированный
исходный код -> интерпритатор -> входные данные */


/* компилятор c c++
исходный код -> компилятор -> машинный код -> выходные данные */




/* Интепретотор во время своей работы может оставлять мусор
чтобы его убрать нужны подпрограммы */
/* хорошая статься https://learn.javascript.ru/garbage-collection */
/* все что теряет ссылка на код удаляется допусим локальные переменные в функциии */






/* утечкаглоьыльных переменный */
'use strict';
function func() {
    smth = 'string';
}; 
/* так делать нельзя */
/* используем use strict */





/* забытый таймер */
const someRes = getData();
const node = document.querySelector('.class');

setInterval(function() {
    if (node) {
        node.innerHTML = someRes;
    }
}, 1000);

/* современные браузеры удаляют обработчик событйи
если элементудален со странице */
/* хорошим тоном будет вручную далять с тега 
removeEventListener */
/* в react это уже все реализовано за нас */







/* Замыкание */
function  outer() {
    const potentialHugeArray = [];
    return function inner() {
        potentialHugeArray.push('Hello');
        console.log('Hello!!');
    }
}

const sayhello = outer();







/* удалии элемент из dom он можнт остаться в мамяти все равно */
function createElement() {
    const div = document.createElement('div');
    /* создаем div */
    div.id = 'test';
    /* создаем id */
    document.body.append(testDiv);
    
};
createElement(); /* без переменной */
/* const testDiv = createElement(); это утечка!!!!!!!!*/
/* сохраняем она останеться после удаления это и есть утечка!!!!!*/

/* document.body.append(testDiv); */
/* добавляем в ody наш div с помощью функции */

/* допустим нам надо удалить этот блок */
function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
    /* сама ищет по id наш елемент
    кстати addblock так работает */
    /* данная функция удалит только из верстки div  */
}

deleteElement();

/* рекомендуется искать утечки с попомощью документация браузера
 в котором мы работаем*/



