'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

      /* ещё один способ анимации */
/* const phoneAnimation = images[0].animate([
    {transform: 'translateY(0)'},
    {transform: 'translateY(100px)'},
    {transform: 'translateY(-100px)'},
    {transform: 'translateY(0)'}
], {
    duration: 3000,
    iterations: Infinity
}); */
/* начальная точка промежуточная точка и конечная точка
далее идет объект с настройками */

let phoneAnimation;

btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        /* если анимации нет мы её помещаем на это кнопку
        при нажатии на кнопку  */
        phoneAnimation = images[0].animate([
            {transform: 'translateY(0) rotate(0deg)',
            filter: 'opacity(100%)'},
            {transform: 'translateY(100px) rotate(180deg)',
            filter: 'opacity(50%)'},
            {transform: 'translateY(-100px) rotate(270deg)',
            filter: 'opacity(75%)'},
            {transform: 'translateY(0) rotate(3600deg)',
            filter: 'opacity(100%)'}
        ], {
            duration: 3000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused') {
        /* если анимация не активна, то мы её запускаем 
        при нажатии на кнопку */
        phoneAnimation.play();
    } else {
        /* либо ставим на паузу при нажатии на кнопку */
        phoneAnimation.pause();
    }
});