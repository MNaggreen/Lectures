const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
/* у пользователя выпадет окно с вопросом второе значение placeholder*/

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: {},
    privat:  false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
/* записываем новое свойство в объект а именно
ключ из переменной, а и значение из переменной
пример Logan: 8.1 */
/* лучше такое делать через квадратные скобки */
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);