/* самые популярные слайдеры это slick 
и 
owl carousel
эти слайдеры написаны на jQuery
*/
/* gallery fotorama glide.js */

/* tiny slider написан на нативном JS */

/* npm i tiny-slider --save т.к. будет использоваться в проете

устанавливаем слайдер*/

import { tns } from "./node_modules/tiny-slider/src/tiny-slider";
/* подключаем сладйер */
/* или так */
/* import { tns } from "./tiny-slider"; 
/* смотрим документацию */

/* далее подключаем слайдер в Index.html */

<script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script>
<!-- NOTE: prior to v2.2.1 tiny-slider.js need to be in <body> --></body>

/* подключаем стили туда же */
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css"></link>

/* инициализируем слайдре */
tns(
    container: '.my-slider',
    items: 3,
    slideBy 'page',
    autoplay: true
); /* yfcnhjqrb */




/* библиотеки работаеющие с touch событиями
hammer.js
 */

/* так же можно все это искать на github */

/* вбиваем в поиске github slider*/

/* еще сайт NISNOM */




/* готовое решение находить проще чем каждый раз икать */