'use strict';
const box = document.getElementById('box'),
      btns = document.getElementByTagName('button'),
      circles = document.getElementByClassName('circle'),
      hearts = document.quarySelectorAll('.heart'),
      oneHeart = document.quarySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
      /* 
      можно сразу так именно в wrapper будут происходить поиски
      по классу
      oneHeart = wrapper.quarySelector('.heart'),
      wrapper = wrapper.querySelector('.wrapper');
      */    

console.dir(box);
/* div#box.box мы полочим объект со своими свойствами
например свойство style(объект) у которого очень много свойств  */
box.style.backgroundColor = 'blue';
/* изменит наш цвет фона */
box.style.width = '500px';
/* изменим ширину */
btns[1].style.borderRadius = '10'
/*делаем закругление */
/* circles.style.backgroundColor = 'red'; ЭТО НЕПРАВИЛЬНО
ОРАЩАТЬСЯ К ПСЕВДО МАССИВУ НЕЛЬЗЯ!*/
circles[0].style.backgroundColor = 'red';
/* так можно */
box.style.cssText = 'background-color: blue; width: 500px';
/*  передаем сразу несколько стилей по одному id*/
const num = 500;
box.style.cssText = `background-color: blue; width: ${num}px'`;
/* можно переменную подставлять в строку */



for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}
/* перебираем элементы и назначаем им стиль поочереди всем */
/* но циклы используються редко смотри ниже */
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});
/* делаем тоже самое что и выше */



/* Теперь перейдим к непосредственно созданию элемента(по тегу)*/
const div = document.createElement('div');
/* на странице index.html данный тег не появиться
только здесь он будет храниться */
const text = document.createTextNode('Тут был я');
/* этот метод помогает добавить текст на страницу
используется редко */
div.classList.add('black');
/* добавляем класс к нашему новому только созданному элементу */



/* Далее мы разберем современные методы добавления на страницу
проверить поддерживается ли метод браузером можно увидеть на сайте
Can I use*/
document.body.append(div);
/* данная команда добавляет наш элемент div
в конец тега body */



/* также, использую qyuerySelector() мы можем сразу выбрать класс и в div
с этим классом добавить наш div это частый подход*/
document.querySelector('.wrapper').append(div);
/* или выше мы добавили переменную и можно теперь сделпть так */
wrapper.append(div);
/* теперь добавляем элемент вначало */
wrapper.prepend(div);
/* если нужно перед каким то определенным элементом посавить наш div */
hearts[0].before(div);
/* после после элемента */
hearts[0].after(div);
/* удаление элемента */
circles[0].remove();
/* заменить одинэлемент на другой */
hearts[0].replaceWith(circles[0]);











/* УСТАРЕВШИЕ КОНСТРУКЦИИ КОТОРЫЕ МОГУТ ВСТРЕТИТЬСЯ */
/* аналог append() */
wrapper.appendChild(div);
/* аналог before первый это тот что мы вставляем, 
второй этот то после которого мы вставляем*/
wrapper.insertBefore(div, hearts[1]);
/* аналог метода remove() */
wrapper.removeChild(hearts[1]);
/* аналог replaceWith() первый тот который вставляем второй 
тот который заменяем */
hearts[0].replaceWith(circles[0], hearts[0]);












/* ВСТАВЛЯЕМ ТЕКСТ В НАШ ТЕГ HTML */
div.innerHTML = "<h1>Hello World</h1>";
/* ВТОРОЙ ВАРИАНТ работает только с текстом 
тег html сюда уже не вставишь!*/
div.textContent = "Hello";
/* Вставка текста с тегом пере другими тегами 
afterbegin вначало элемента внутри
afterend за элемент снаружи
beforebegin до начала элемента снаружи
beforeend до конца еэлемента внутри*/
div.insertHTML("beforeend", '<h2>Hello</h2>');



