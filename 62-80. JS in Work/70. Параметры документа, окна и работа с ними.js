/* document Это объект который содержит все структуру */
/* window эта та область в которой показывается сайт */
/* screen это ваш монитор панель задач и т.д. */
console.dir(document);
console.dir(window);
console.dir(screen);

/* clientWidth clientHeight можжно получиться длину и ширину с паддингом
но без margin и border и скролла */
const box = document.querySelector('.box'),
      btn = document.querySelector('button');
const width = box.clientWidth;
const height = box.clientHeight;
console.log(width, height);
/* 405 450 */
/* при box-sizeing: border-box значение будет 385 335 */

const width2 = box.offsetWidth;
const height2 = box.offsetHeight;
console.log(width, height);
/* 400 350 как и значения из css */


const width3 = box.scrollWidth;
const height3 = box.scrollHeight;
console.log(width, height);
/* 385 1352 вся высота документ со скроллом*/




btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
    /* добавляем высоту в стили добавляя высоту полученную из переменной 
    и добавляя px*/
    
    console.log(box.srollTop);
    /* 143 покажет сколько пикселей вы уже отлистали вниз */
});




/* расчитываем координаты */
console.log(box.getBoundingClientRect().top);
/* получаем объект который вернет
высоту от верха документа и до низа нашего окна с документом
правое это от левого края окна и до правой граници документа */

console.log(box.getBoundingClientRect().top);
/* получаем только высоту */





/* как получить стили которые были применены*/
const style = window.getComputedStyle(box);
console.log(style);
/* тут будет объект у которого можно спрашивать раззные значения */
console.log(style.display);
/* block */
/* все стили выше получены из css стили inline которые прописаны в теге
мы получить не сможем */

/* получить стили псевдо элемента */
const style1 = window.getComputedStyle(box, /* псевдоэлемент */);





/* количество пикселей которые пользователь 
отлистал именно на это странице */
console.log(document.documentElement.scrollTop);
/* 90 */


/* пролистать страницу вверх */
document.documentElement.scrollTop = 0;



window.scrollBy(0, 400);
/* от текущего положения 0 до 400 пикселей */


window.scrollЕщ(0, 400/* сверху */);
