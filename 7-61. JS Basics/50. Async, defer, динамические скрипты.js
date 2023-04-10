/* script.js всегда нужно распологоть в конеце
тега body т.к.
он все прогружается сверху вниз */

/* тестируем разные позиции script */

/* вначале тега body */

/* html */
/* defer */
<script defer src='js/script'></script>
/* defer - скрипт загружается в фоновом режиме
пока страница подгружает все теги 
defer никогда не блокирует страницу!*/
/* defer */
<p></p>
<p></p>


/* async */
<script async src='js/scriptOne'></script>
<script async src='js/scriptTwo'></script>
/* async загружается также в фоновом режиме
и запускается сразу как будет загружен
async не будет ждать как defer другие скрипты 
все скрипты с async Загружаеютсья одновременно
итот кто первый загрузился первым и запуститься*/
/* async */



/* динамические скрипты */
<script src='js/scriptThree'></script>
/* динамические скрипты */
/* html */





/* js */
'use strict'
const p = document.querySelectorAll('p');
console.log(p);
/* этот скрипт нам выдаст список тегов p хотя сам скрипт находится
выше этих тегов */
/* без defer это бы не сработало!!!!!!!!!!! */
/* defer - скрипт загружается в фоновом режиме
пока страница подгружает все теги */

/* вывод async будет такой же
но async не рекомендуется использовать */



/* динамические скрипты */
const script = document.createElement('script');
/* создаем тег script */
script.src = 'js/test.js';
/* добавляем атрибут src */
script.async = false;
/* отменяем поведение по умолчанию */
document.body.append(script);
/* добавялем наш тег вконец body */

/* или так */

function loadScript(src) {
    const script = document.createElement('script');
    /* создаем тег script */
    script.src = 'src';
    /* добавляем атрибут src */
    script.async = false;
    /* отменяем поведение по умолчанию */
    document.body.append(script);
    /* добавялем наш тег вконец body */
}
loadScript('js/test.js')
loadScript('js/testTwo.js')
/* так можно загружать и добавлять на страницу динамчно
даже несколько скриптов */
/* они будут загружаться друг за другом так как
async поставлен на false */
/* динамические скрипты ТАКОЙ МЕТОД ЧАСТО ИСПОЛЬЗУЕТСЯ*/