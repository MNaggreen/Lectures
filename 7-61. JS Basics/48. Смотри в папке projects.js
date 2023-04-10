/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
/* сюда мы поместим весь наш код чтобы подождать пока загрузиться 
костяк сайта без картинок и т.д.
тяжедые картинки могут замедлить загрузку сайта и тем самым вызвать ошибку
работы скрипта */
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          /* здесь мы выбрали элемент HTML который содержит в себе все реклаламные обявления и получили список */
          poster =  document.querySelector('.promo__bg'),
          /* здесь мы нашли наш постер и выбрали только его сразу!  */   
          genre = poster.querySelector('.promo__genre'),
          /* здесь мы нашли наш жанр и выбрали только его сразу!  */ 
          movieList = document.querySelector('.promo__interactive-list'), 
          /* здесь мы нашли наш список фильмов и выбрали только его сразу!  */    
          
          addForm = document.querySelector('form.add'),
          /* botv форму(заполение) по классу */
          addInput = addForm.querySelector('.adding__input'),
          /* добавляем именно форму по классу */
          checkbox = addForm.querySelector('[type="checkbox"]');
          /* добавляем нашу галочку непосредственно используя тип */

    addForm.addEventListener('submit', (event) => {
        /* добавляем слушателя для нашей формы непосредственно для
        всего дива при нажатии на форму(кнопка) мы сможем получить данные */
        event.preventDefault();
        /* отменяем перезагрузку браузера
        т.е. его стандартное поведение */
        let newFilm = addInput.value;
        /* здесь будет храниться то что ввел пользователь */
        const favorite = checkbox.checked;
        /* тут мы присваевам значение после проверки на
        заполненость нашего чекбокса посредством
        checked будет либо true 
        или false */

        /* првоеряем есть ли хоть один элемент в
        строке корторую ввел пользователь */
       
        
        
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
                /* с помощью интерполяции одно временно 
                обрезаем строку и добавляем троеточие */
            }
            if (favorite) {
                console.log('Добавлен любимый фильм');
            }
            /* если мы заполняем чекбокс то тогда консоль выведет сообщение */
            movieDB.movies.push(newFilm);
        /* добавляем фильм который ввел пользователь */
        /* movieDB.movies.sort(); */        
        sortArr(movieDB.movies);
        /* сортируем фильмы по алфавитному порядку
        после добавления нового фильма */
        createMovieList(movieDB.movies, movieList);
        /* вызываем функцию по добалению новых фильмов */
       /*  addForm.requestFullscreen(); */
        /* очищаем нашу форму после запоминания фильма */
        /* или */
        }


        
        event.target.reset();
    });      
        
    
    const deleteAdv = (arr) => {
        /* удаляем рекламу (перебираем каждый элемент списка adv)*/
        arr.forEach(item => {
            item.remove();
        });
        /* еще вариант безымянная функция*/
        /* adv.forEach(function (item){
            item.remove();
        }); */
    };
    deleteAdv(adv);
    
    const makeChanges = () => {
         /* меняем жанр фильма на главной странице */
        /* меняем комедию на драму обращаемся прямо к тексту*/    
        genre.textContent = 'Драма';    
        /* меняем постер 1 это наша постер 2 это стили 3 это параметр который мы изменяем */
        poster.style.backgroundImage = 'url("img/bg.jpg")';
        console.log(poster.innerHTML);
        /* посмотреть значение свойства poster */
    };
    makeChanges(); 

    const sortArr = (arr) => {
        /* сортировка по алфавиту списка фильмов */  
        arr.sort();
        /* функция подобавляению просмотренных фильмов */ 
        };
    /* sortArr(movieDB.movies); */





    
    function createMovieList(films, parent) {        
         /* вставляем список фильмов из сформированного спсика fimls */
        /* сначала удалим все фильмы из списка parent 
        замениив на пустую строку */
        parent.innerHTML = "";         
        /* добавляем фильмы
        сначала номер i потом филм название film  и так в зависимости от количества фильмов в нашем списке*/
        sortArr(films);
        /* сортируем сразу после добавления фильма */
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${film}
                <div class="delete"></div>
                    </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            /* на каждую кнопку навешиваем прослушку */
            btn.addEventListener('click', () => {
                /* по нажатии на кнопку удалить родителя
                это кнопки */
                btn.parentElement.remove();
                /* убираем фильм из нашего списка фильмов */
                movieDB.movies.splice(i, 1);
                /* номер элемента i сколько надо удать 1*/
                
                createMovieList(films, parent);
                /* вызываем функцию чтобы
                она после удаления заного отсортировала и пронумеровала 
                остаток фильмов каждый раз как мы удаляем фильм*/

            });
        });

    }
    createMovieList(movieDB.movies, movieList); 
});








