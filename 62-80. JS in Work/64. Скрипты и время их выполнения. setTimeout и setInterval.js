/* для запуска функции с определенной задержкой */
const timerId = setTimeout(/* объявление функции */ function() {
    console.log('Hello');
}, 2000); 
/* первый параметр это функция
всторой задержка в милисекундах */
/* можно передать третий аргумент
которй будет аргументом для встроенной функции */
const timerIdSecond = setTimeout(/* объявление функции */ function(text) {
    console.log(text);
}, 2000, 'Hello'); 
/* передаем готовую функцию */
const timerIdThird= setTimeout(/* передаем функции */ 
                                logger, 2000); 
function logger () {
    console.log('text');
};
/* Отменяем интервал при необходимости
(пользователь уже зарагистрирован или купил товар) */
clearInterval(timerId);














/* используем обработчик событйи */
const btn = document.querySelector('.btn');
      let timerIdFourth,
      /* создание переменной для хрананения нашего интервала */ 
      i = 0;
      /* i Это счетчик */ 
/* выбираем кнопку */
btn.addEventListener('click', () => {
   /*  const timerId = setTimeout(logger, 2000); */
   timerIdFourth = setInterval(logger, 500);
});
/* при нажатии сработает таймер через 2 секунды и так будет бесконечно*/

function logger () {
    if (i === 3) {
        clearInterval(timerId);
        /* обнуляем таймер сразу чтобы он бесконечно не срабатывал */
    }
    console.log('text');
    i++;
    
};











/* ПОЧЕМУ РЕКУРСИВНЫЙ SetTimeout лучше чем интервал */
/* Рекурсивный вызов setTimeout */
let id = setTimeout(function log(){
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500);















/* Практика */
const btnTwo = document.querySelector('.btn');
      let timerIdFifth,
      /* создание переменной для хрананения нашего интервала */ 
      j = 0;
      /* i Это счетчик */ 
    function myAnimation() {
        const elem = document.querySelector('.box');
        let pos = 0;

        const id = setInterval(frame(), 10);
        /* запускае нашу анимамцию она будет каждый раз запускаться пока мыее не выключим*/
        
        function frame() {
            if (pos == 300) {
                clearInterval(id);
                /* анимация прекратиться когда pos будет равно 300 */
            } else {
                pos++;
                elem.style.top = pos +'px';
                elem.style.left = pos + 'px';
            }
        }
    }

    btnTwo.addEventListener('click', myAnimation);
    /* анимация запустить после клика на кнопку */
        