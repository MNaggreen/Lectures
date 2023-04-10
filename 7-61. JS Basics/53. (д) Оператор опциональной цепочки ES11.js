'use strict';

const box = document.querySelector('.box');
/* выбираем именно див с классом box */
const block = document.querySelector('.block');
console.log(block);
/* null потомучто такого класса и тега нет */
console.log(block.textContent);
/* null */
/* затем выпадет ошибка так как предыдущий блок ей вызвал */
/* далее код перестанет выполняться */
if (block) {
    console.log(block.textContent);
}
/* этот вариант правильнее он не заблокирует код */
console.log(1+2);
/* 3 */






console.log(block?.textContent);
/* вернет undefined и не остановит работу всего кода
даггый метод работает ктолько на чтение */


/* block?.textContent = '123'; */
/* так делать нельзя undefined менять на строку нельзя */



const userDatas = {
    name: 'Ivan',
    age: null
};
/* console.log(userDatas.skills.js); */
/* данный код выдаст ошибку т.к. такого свойства нет */
if (userDatas && userDatas.skills && userDatas.skills.js) {
    console.log(userDatas.skills.js);
    /* только так сработает */
};
/* или так */
console.log(userDatas.skills?.js);
/* тут будет только Undefined и никаких ошибок
оператор ? поверяет код слева
т.е. он проверит только существование skills */

/* можно так  */
console.log(userDatas?.skills?.js);
/* но если userData не создана даже то увы выпадет ошибка */
/* лучше не злоупортреблять */









/* еще один пример */
const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('Hello');
    }
};
userData.say();
/* userData.hey(); */
/* выпадет ошибка */
userData.hey?.();
/* так ошибки не будет
вернется undefined */
/* также с квадратными скобками можно!!!!! */

