/* события это все чем занимается пользователь на странице */
/* в гугле можно написать и посмотреть какие вообще происходят
события */



/* 1 передаем в html атрибут данный метод не используется реально*/
<button onclick="alert('Click')" id="btn"></button>




/* 2 способ через dom данный меодот не используется реально*/
const btn = document.querySelector('bottun');
btn.onclick = function() {
    alert('Click')
};
btn.onclick = function() {
    alert('Second Click')    
};
/* после того как мы нажали первый раз выпадет Click
последующие разу Second Click только будет выпадать */




/* 3 способ желательный */
/* добавляем слущатель событий 1 именно название 2 callback функция*/
btn.addEventListener('click', () => {
    alert('Click');
});
btn.addEventListener('click', () => {
    alert('Second Click') 
});
/* первое действие в данном случае сохраниться 'Click' потмо SecondClik */
btn.addEventListener('mouseenter', () => {
    console.log('Hover'); 
});
/* каждый раз когда мы наводим мышь, унас будет выпадать hover в консоль */





btn.addEventListener('click', (event, someOther) => {
    console.log(e); 
});
/* если необходимо передать данные об действие записываем его как аргумент
аргументов может быть */
/* у нас вернеть объект который содержит в себе все данные об действие
положение мыши и др. самый главный это 
type: 'mouseenter'
target: btn
Где действие и цель */

/* или же e.target вернет сразу тег со всем содержимым */
btn.addEventListener('click', (event, someOther) => {
    console.log(e.target); 
    /* <div class="black"></div> */
});

/* Благодаря этом мы можем делать все что хотим с этим div */
/* например удалить его */
btn.addEventListener('click', (event) => {
    console.log(event.target); 
    /* <div class="black"></div> */
    e.target.remove();
    /* данное дествие удалит div после клика */
});

/* Удаляем eventlistener */
let = i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement /*1это действие 2функция которая вызоветься */);
        /*  после однократного клика наша функция удаляет обраюботчик */
    }
};
btn.addEventListener('click', deleteElement /*тут мы назначаем обработчик*/);
btn.removeEventListener('click', deleteElement /*1это действие 2функция которая вызоветься */);









/* СЛЫТИЕ СОБЫТИЙ */
const btn = document.querySelector('buttun');
      overlay = document.querySelector('.overlay');
const deleteElement2 = (e) => {
        console.log(e.target); /* console.log(e.currentTarget); в этом случае выведется имеенно div overlay */
        console.log(e.type);        
        };
btn.addEventListener('click', deleteElement /*тут мы назначаем обработчик*/);
overlay.addEventListener('click', deleteElement /*тут мы назначаем обработчик*/);
/* сначала событие происходит на вложенном элементе btn */
/* далее событие происходит на главном элементе */
/* оба консоли пакадут div btn */



/* ОТМЕНА СТАНДАРТНОГО ПОВЕДЕНИЯ БРАУЗЕРА исполдьзуется часто*/
const link = document.querySelector('a');/* добавляем тег со сслыкой на utub */
link.addEventListener('click', (event) => {
    event.preventDefault();/* это говорит браузеру что после клика нужно делать то что сказал код */
    console.log(event.target);
});
/* после клика по сыллке перехода не произойдет 
произойдет вывод в консоле target элемент которым будет наш a тег*/








/* КАК ПОВЕСИТЬ ОДИН EVENT НА МНОГО ЭЛЕМЕНТОВ(ТЕГОВ) */
/* НУЖНО ПОЛНОСТЬЮ ПЕРЕБРАТЬ FOREACH ЦИКЛОМ И НА КАЖДЫЙ ЭЛЕМНТ НАВЕСИТЬ EVENT
 */
const paintElement = (e) => {
    console.log(e.target); /* console.log(e.currentTarget); в этом случае выведется имеенно div overlay */
    console.log(e.type);        
    };
const btns = document.querySelectorAll('bottun');
btns.forEach(btn => {
    btn.addEventListener('click', paintElement)
});









/* Опции в событиях как третий аргумент */
link.addEventListener('click', paintElement, once);
/* once говорит нашему нашему EventListener что данную функцию нужно запустить только один раз */
/* если на третим месте стоит false значит мы не передаем никаких опций вообще */