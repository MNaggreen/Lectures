'use strict';
/* старый метод */
const box = document.getElementById('box');
/* берем элемент у которого id 'box' */
console.log(box);
/*<div id="box"></div>  */
/* это все надо делать только в браузере
потомучто document мы мы получаем из index */



/* получаем псевдомассив по всем тегам */
const btns = document.getElementByTagName('button');
console.log(btns);
/* HTMLCollection(5) [button, button, button, button, button,] т.е. возвращается массив с кнопками*/
console.log(btns[1]);
/* <button>1</button> */

/* если нужно обратиться именно к одной кнопке */
const btns1 = document.getElementByTagName('button')[1];
/* <button>1</button> */
/* очень важноЖ: мы должны обращаемся к именно к нопке по индексу а нек массиву  */



/* получаем поклассам */
const circles = document.getElementByClassName('circle');
console.log(circles);
/* [div.circle, div.circle, div.circle] */








/* получаем все сразу(за раз что то одно) id, class, tag 
все CSS селекторы + 
можно добавить метод forEach к нашему псевдомассиву*/
const hearts = document.queryselectorAll('.heart');
console.log(hearts);
/* [div.heart, div.heart, div.heart] */
hearts.forEach(item => {
    console.log(item);
});
/* <div id="heart">...</div>
<div id="heart">...</div>
<div id="heart">...</div> */

/* метод который возвращает сразу первый элемент который 
поподает под совпадение*/
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
/* <div id="heart">...</div> */