import 'jquery';
/* не получилось подключить webpack */

/* как получить кнопку по id */
const btn = $('#btn');
console.log(btn);
/* мы получим объект который будет содержать */
/* все методы есть в документации 
селекторы события работа с набором и т.д.*/


/* jquery UI плагины для Jquery */


/* аналог dom content loaded */
$(document).ready(function(() {
    /* при наведении мыши класс активности */
    
    /* получаем элемент */
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });
    /* получаем первый элемент по классу */


    
    
    
    /* скрываем */
    $('.list-item:eq(2)').on('click', function() {
        
        /* обращаемся ко всем четным изображениям и скрываем красиво */
        $('.image:even').fadeToggle('slow');
    });

    
    
    /* получаем элемент */
    $('.list-item:eq(4)').on('click', function() {
        /* скрываем нечентные через 2 сек по клику на кнопеку 4*/
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);
    });
});