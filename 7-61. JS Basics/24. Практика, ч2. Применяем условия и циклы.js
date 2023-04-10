"use strict"

const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
/* у пользователя выпадет окно с вопросом второе значение placeholder*/
/* что делает + он берет значение и если это пустая строка
он переделает её в 0 */

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: {},
    privat:  false
};

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
/* при нажатии кнопки отмена
когда выпадает окно prompt
мы получаем значение null */

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
console.log(personalMovieDB);