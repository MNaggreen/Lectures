/* всего 6 событий на мобильной версии сайтаов */

/* 1 */
/* touchstart */

/* 2 */
/* touchmove */
/* водить пальцем по экрану так это работает */

/* 3 */
/* touchend */
/* как только палец оторвался от элемента событие выполнится*/

/* 4 */
/* touchenter */
/* при ведении пальца по экрану наш элемент
наскакивает на какую то кнопку элемлемент */

/* 5 */
/* touchleave */
/* палец продолжил скользить по экрану но
ушел за элемениы */

/* 6 */
/* touchcancel */
/* точка где скольжение будет отменено например 
за границаи браузера */















window.addEventListener('DONContentLoader', () => {
    /* ждем пока основной костяк сайта загрузится */
    const box = document.querySelector('.box');
    box.addEventListener('.touchstart', (e) => {
        /* при клике по элементу событие сработает */
        e.preventDefault();
        /* всегда так делаем чтобы отменить стандартное поведение браузера */
        console.log('Start');
        console.log(e.touches);
        /* выводим обект
        содержащий волко соприкосновений 
        в консоль
    длина length определяется количеством прикосновений*/});

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    const box = document.querySelector('.box');
    box.addEventListener('.touchmove', (e) => {
        /* при наведении с зажатым пальцем
        у нас будет выдаваться ообщение  ниже*/
        e.preventDefault();
        /* всегда так делаем чтобы отменить стандартное поведение браузера */
        console.log('Move');
        console.log(e.targetTouches[0].pageX);
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    const box = document.querySelector('.box');
    box.addEventListener('.touchend', (e) => {
        /* при наведении с зажатым пальцем
        и последующим отывом пальца
        событие сработает*/
        e.preventDefault();
        /* всегда так делаем чтобы отменить стандартное поведение браузера */
        console.log('Move');
    });
















/* три главной своеяства для event доступных при работе с сенсорными устройствами */
/* touches */
/* выдает список колва пальцев которые держаться нажатыми экрану */
const box = document.querySelector('.box');
    box.addEventListener('.touchstart', (e) => {
        /* при клике по элементу событие сработает */
        e.preventDefault();
        /* всегда так делаем чтобы отменить стандартное поведение браузера */
        console.log('Start');
        
        /* 1 свойтво */
        console.log(e.touches);
        /* выводим оьбект
        содержащий толко соприкосновений 
        в консоль
    длина length определяется количеством прикосновений*/

    /* 2 свойтво */
    console.log(e.targetTouches);
    /* выводим обьект
    содержащий толко соприкосновений в элементе заданном
    длина length определяется количеством прикосновений*/


    /* 3 свойтво */
    console.log(e.changedTouches);
    /* допустим мы на вели три пальца на элемент
    и оторвали два из них
    вот эти два будут записаны в обьект changedTouches */
    /* выводим обьект
    содержащий толко пальцы которые оторвали от экрана    
    в консоль
    длина length определяется количеством прикосновений*/


    });




















    /* используем в практике наши свойства event */
    const box = document.querySelector('.box');
    box.addEventListener('.touchmove', (e) => {
        /* при наведении с зажатым пальцем
        у нас будет выдаваться ообщение  ниже*/
        e.preventDefault();
        /* всегда так делаем чтобы отменить стандартное поведение браузера */
        console.log('Move');


        console.log(e.targetTouches[0].pageX);
        /* выводим координаты где палец водит */
    });
});





    /* !!!!!!!!!!!!!!!!!!!!! */
    /* обычно все эти скрипты прописываються
    при помощи добавленных
    стороних скриптов
    например Hammer.js */