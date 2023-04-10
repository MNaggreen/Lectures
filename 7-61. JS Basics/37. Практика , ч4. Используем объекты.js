"use strict";
/* let numberOfFilms; */
/* у пользователя выпадет окно с вопросом второе значение placeholder*/
/* что делает + он берет значение и если это пустая строка
он переделает её в 0 */
const genres = [];
const personalMovieDB = {
    count: 0 /* numberOfFilms */,
    movies: {},
    actors: {},
    genres: [],
    privat:  false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            /* isNaN проверяет номер ли это */
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');    
            } else {
                console.log('error');
                /* если по какой то причине пользователь 
                не смог ответить т.е. нажал отмена не нажал вообще
                или пустая строка
                то мы откидываем I на шаг назад чтобы 
                ещераз запросить у пользователя */
                i--;
            }    
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {        
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        /* при вызове данной функции будет
        переключаться наш privat элемент*/
    },
    writeYourGenres: function() {
        for (let k = 1; k <= 3; k++){
            let genre = prompt(`Ваш любимый жанр под номером ${k}`);
            if (genre == '' || genre === null) {
                console.log("Вы ввели неккоректный данные или не ввели их вовсе");
                k--;
            } else {
                personalMovieDB.genres[k-1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, k) => {
            /* где item это название каждого элеменат
            k номер по порядку*/
            console.log(`Любимый жанр ${k + 1}/* тут будет 1 2 3 */ - это ${item}/* название из массива */`);
        });    
    },
    /* та же задача но другим способом!!!!!!!!!!! */
    writeYourGenresTwo: function() {
        for (let k = 1; k <= 2; k++) {
            /* цикл будет запускаться один
            раз и если человек не вводит ничего
            цикл запустится заного */

            /* let genre = prompt(`Ваш любимый жанр под номером ${k}`);
            if (genre == '' || genre === null) {
                console.log("Вы ввели неккоректный данные или не ввели их вовсе");
                k--;
            } else {
                personalMovieDB.genres[k-1] = genre;
            } */
            
            let genres = prompt('Введите ваши любимые жанры через запятую').toLowerCase();
            /* в JS  все сортируется с помощью с помощью юникода
            т.е. большие буквы сначала, а затем маленькие */
                if (genres == '' || genres === null) {
                    console.log("Вы ввели неккоректный данные или не ввели их вовсе");
                    k--;
                } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort();
        }
        personalMovieDB.genres.forEach((item, k) => {
            /* где item это название каждого элеменат
            k номер по порядку*/
            console.log(`Любимый жанр ${k + 1}/* тут будет 1 2 3 */ - это ${item}/* название из массива */`);
        });    
    }
};
/* при нажатии кнопки отмена
когда выпадает окно prompt
мы получаем значение null */
/* personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres(); */


















