/* тут мы будем общаться с сервером */

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';    
    /* помещаем строчку с начальным api чтобы не повторяться */
    _apiKey = 'apikey=2d746fef4cd0bb4a04da35ab34ae77c3';
    /* наш ключ */

    /* это класс на чистом JS */
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }/* если запрос не смог выполниться выбрасываем новосозданную ошибку */
        return await res.json();/* иначе возвращаем наш ответ от сервера в формате json */
    }
    
    /* getAllCharacters = () => {
        return this.getResource('https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=2d746fef4cd0bb4a04da35ab34ae77c3'); */
        /* бурем данные из функции выше */
        /* каждый раз после того как мы меняем настройки в конструторе на сайте нужно нажимать try it out
        для того чтобы появилась ссылка с новыми параметрами */
    /* } СТАРАЯ ВЕРСИЯ*/

    getAllCharacters = async () => {
        const res = this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);/* формируем обект сразу с нужными данными с помощью map и нажей функции */
    }/* НОВАЯ */

    /* getCharacter = (id) => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=2d746fef4cd0bb4a04da35ab34ae77c3`); */
        /* модифицируем ссылку убираеая из неё limit и  offset и добавляем id 
        который будет подставляться каждый раз как мы вызываем функцию */
   /*  } СТАРАЯ ВЕРСИЯ*/
    

   /* getCharacter = (id) => {
    return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }*/ /* НОВАЯ */ 

    getCharacter = async (id) => {
        /* созадем асинхронную функцию которая будет ждать ответа */
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        /* при появлении результата она запишет его в переменную */        
        return this._transformCharacter(res.data.results[0]);/* оптимизируем строку */
        /* возвращаем обработанный обект с помощью функции
        и передаем его в RandomChar */
    }

    _transformCharacter = (char) => {
        return {
            name: char.name,/* вытаскиваем имя у первого элема */
            description: char.description ? `${char.decription.slice(0, 210)}...` : 'Unfortunately no information avaliable for these character/group. You can contact developers of Marvel API or just wait for someone to add character information.',
            /* сверху мы проверяем есть ли чтото в description и если есть то мы обрезаем до 210 символов 
            если нет то заменяем сообщением */
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,/* получаем сразу два значения какртинку и расширение картинки */
            homepage: char.urls[0].url,
            wiki: char.urls[1].url}
        }            
}

export default MarvelService
/* я поменял настрйоки в package.json чтобы у меня подгружались старые 
node modules сама настройка ниже показана:
"start": "react-scripts --openssl-legacy-provider start" */