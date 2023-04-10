const btns = document.querySelectorAll('button');
console.log(btns[0].classList.length);
/* обращаемся к первому элементу псведомассива btns
 и даллее мы узнаем колво классов в элементе*/
 /* 2 */
 
 console.log(btns[0].classList.item(0));
 /* получаем первый класс от нашей кнопки */
 /* blue */
 console.log(btns[0].classList.item(1));
 /* sum */

 console.log(btns[0].classList.add('red', 'green'));
 /* добавляем класс red который перекрасит нашу
 первую кнопку можно несколько*/

 console.log(btns[0].classList.remove('blue'));
 /* удаляем класс blue */

 console.log(btns[0].classList.toggle('blue'));
 /* данный метод подключает если класс не активен
 либо нооборот убирает если класс активен */



/* проверяем наличие класса у определенного элемента
и возвращает булиновое значение */
if (btns[1].classList.contains('red')) {
    console.log('red');
}



/* добавляем некий аналог hamburger кнопки */
btns[0].addEventListener('click', () => {
    /* когды мы кликаем на первую кнопку */
    if (!btns[1].classList.contains('red')) {
        /* ! добавляет значениее что либо есть либо нет
        иесли нет то мы переключаем */
        btns[1].classList.toggle('red');
    } else {
        btns[1].classList.remove('red');
    }
});





/* старый метод получениясписка классов */
console.log(btns[0].className);
/* 'blue some' получаем список классов как одну строку*/










/* далее вторая часть урока Делигирование*/
/* что бы не вешать одно и тоже событие на каждую кнопку отдельно
мы назначаем функцию на родителя который будет проверять наличие
клика на своих детях */
const wrapper = document.querySelector('.btn-block');
/* получаем div с нашим классом */
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName === "BUTTON"){
       /* div#first.btn-block тут будет */
       /* првоерка на клик именно кнопки 
       мы проверяем event.target для того чтобы опередлить 
       можно ли клиать на этот элемент
       напрмер на некоторых тегах клик не работает*/
       /* можно так */
       /* (event.target && event.target.classlist.contains('blue')) */
        console.log('Hello');

        /* далее сколько кнопок мы бы не добавили все будут
        как как кнопка со слушателем событий */
}
});
const btn = document.createElement('button');
/* добавляем ещеодну кнопку */
btn.classList.add('red');
/* добавляем класс у нашей кнопке */
wrapper.append(btn);
/* рекомендуется использовать данный метод вместо
метода добавляния eventListnere через forEach */




/* БОНУС как делают в гугл */
if (event.target && event.target.tagName.matches('button.red'))
/* проверяем есть ли наш тег с классом red в списке
tag name */
