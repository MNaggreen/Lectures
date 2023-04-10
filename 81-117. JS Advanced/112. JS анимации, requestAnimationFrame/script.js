const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');  
let pos = 0;

// Первый способ анимации
// Такая анимация грузит компьютер
// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) {
        /* если позиция меньше 300 мы запускаем анимацию
        и так и будет запускать пока pos не станет 300 */
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));
/* чтобы запускать функцию внутри коллбеков мы должно делать
анонимную функцию которая вызывает нашу анимацию */

let id = requestAnimationFrame(myAnimation);

cancelAnimationFrame(id);
/* чтобы отменить анимациюпреждевременно */