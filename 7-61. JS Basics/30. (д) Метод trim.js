/* это метод позволяет удалять пробелы с конца и начала строки */
/* str.trim() */


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt('На сколько оцените его?', '').trim();
                /* здесь мы получаем место пробелов пустаю строку
                таким образом пользователю не обмануть нашу
                программу и так как у нас тепере пустая строка без
                проььелов мы получим сообщение error Об ошибке */
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');    
        } else {
            console.log('error');            
            i--;
        }    
    }
}
rememberMyFilms();