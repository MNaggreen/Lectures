/* обращаемся к элементу body */
console.log(document.body);
/* выдаст все содержимое тега body */
console.log(document.head);
/* выдаст все содержимое тега head */
console.log(document.documentElement);
/* выдаст весь HTML */



/* чтобы обратиться к дочерним элементам 
узлы которые являються детьми у body)*/
console.log(document.body.childNodes);
/* [text, div.wrapper, text, comment, text, script] */ /* это ноды текстовая нода и т.д */
/* text это перенос строки ==$0*/
/* div.wrapper это div Логично */
/* text это опять перенос строки */
/* comment это комментарий пользователя */
/* rext перенос */
/* script Это наш скрипт */

/* разница между узлами и элементами dom */
/* теги это элементы
то что внутри это обычно узлы */



/* получение первого и последнего дочернего элемента ноды body */
console.log(document.body.firstChild);
/* #text */
console.log(document.body.lastChild);
/* <script src='asd'></script> */







/* получение родителя соседей и детей */
console.log(document.querySelector('#current').parentNode);
/* получаем доступ к кнопке с id current и потом сразу к его родителю */
/* <div class=first></div> */

/* продублируя команду два раза мы обратимся еще выше над div c классом first */
console.log(document.querySelector('#current').parentNode.parentNode);
/* <div class=wrapper></> */











/* Дата Атрибуты работают так как чекпоинты в нашем html теге  */
/* просто добавляем в html data-current="3"
где место 3 может быть любое число
самое главное это data-
дальше любое слово */
/* <li data-current="3">3</li> */
console.log(document.querySelector('[data-current="3"]'));
/* задаем свойство тегу li */

/* получаем доступ к след.ребенку */
console.log(document.querySelector('[data-current="3"]').nextSibling);
/* мы получили перенос строки */

console.log(document.querySelector('[data-current="3"]').previousSibling);
/* и опять перенос строки */

/* Как непопадатсья на текстовые узлы????? Для этого есть аналоги */
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
/* и тогды мы получим <li class=wrapper></li> вместо текста */
console.log(document.querySelector('[data-current="3"]').previousElementSibling);










console.log(document.querySelector('#current').parentElement);
/* получаем сразу элемент first */








console.log(document.body.firstElementChild);
/* div wrapper*/
console.log(document.body.lastElementChild);
/* последний элемент */















/* как получить child node без текстовых нод? */
/* For и of перебирающая конструкиця */
/* сейчас мы избавимся от текстовых нод(переносов строки) */
for (let node of document.body.childNodes) {
    /* каждая нода это обьект и у ниего есть имя */
    if (node.Name == '#text') {
        continue;
    } 
    console.log(node);
};
/* данная функция выведеть только элементы и комментарии нашего html документа  */