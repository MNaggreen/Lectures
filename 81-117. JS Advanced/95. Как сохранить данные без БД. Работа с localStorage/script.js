'use strict';
/* путь в браузере application
слева выбрать Local storage
это объект до 5 мегабайт */

/* localStorage.setItem('number', 5); */
/* записываем в хранилище данные */

/* console.log(localStorage.пetItem('number')); */
/* получаем из хранилища */
/* 5 */

/* localStorage.removeItem('number'); */
/* удаляем значение */

/* console.log(localStorage.пetItem('number')); */
/* получаем из хранилища */
/* null */

/* localStorage.clear('number'); */
/* прсто удалейм все */

const checkbox = document.querySelector('#checkbox'),
      form = document.quarySelector('form'),
      change = document.quarySelector('#color');

/* атоматическая проверка локального хранилища */
if (localStorage.getItem('isChecked') === true) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    /* проверяем изменене ли значение */    
    form.style.backgroundColor = 'red';}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
    /* изменяем локальное хранилище при клика на галку */
});


/* кнопка change color простой переключатель */
change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        /* проверяем изменене ли значение */
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
        /* очищаем и перекрашиваем в белый */
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

/* Завписываем свои данные в объект */
const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
/* адаптируем данные для слокального хранилища */
localStorage.setItem('alex', serializedPersone);
/* записываем данные */

console.log(JSON.parse(localStorage.getItem('alex')));

