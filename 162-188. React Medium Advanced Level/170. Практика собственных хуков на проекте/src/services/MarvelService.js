/* тут мы будем общаться с сервером */
import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();
    // вытаскиваем из нашего кастомного хука то что он возвращает

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';    
    /* помещаем строчку с начальным api чтобы не повторяться */
    const _apiKey = 'apikey=2d746fef4cd0bb4a04da35ab34ae77c3';
    /* наш ключ */ 
    const _baseOffset = 210; /* это только для песонажей */   

    /* ЭТА ФУНКЦИЯ БЫЛА ПЕРЕНЕСЕНА В КОМПОНЕНТ HTTP.HOOK.JS */
    /* getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`); */
        /*}  если запрос не смог выполниться выбрасываем новосозданную ошибку */
        /*return await res.json();  иначе возвращаем наш ответ от сервера в формате json */
    /* } */
    
     /* getAllCharacters = () => {
       const res = this.getResource('https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=2d746fef4cd0bb4a04da35ab34ae77c3');
       return  res.data.results.map(this._transformCharacter); */
        /* бурем данные из функции выше */
        /* каждый раз после того как мы меняем настройки в конструторе на сайте нужно нажимать try it out
        для того чтобы появилась ссылка с новыми параметрами */
     /* } СТАРАЯ ВЕРСИЯ */

     const getAllCharacters = async (offset = _baseOffset) => {  /* передаем аргумент по умолчанию */     
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);  /* формируем обект сразу с нужными данными с помощью map и нажей функции */
     } /* НОВАЯ  */
    
    /* getCharacter = (id) => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=2d746fef4cd0bb4a04da35ab34ae77c3`); */
        /* модифицируем ссылку убираеая из неё limit и  offset и добавляем id 
        который будет подставляться каждый раз как мы вызываем функцию */
   /*  } СТАРАЯ ВЕРСИЯ*/    

   /* getCharacter = (id) => {
    return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }*/ /* НОВАЯ */ 

    const getCharacter = async (id) => {
        /* созадем асинхронную функцию которая будет ждать ответа */
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        /* при появлении результата она запишет его в переменную */ 
        /* console.log('mount', this.a);  */      
        return _transformCharacter(res.data.results[0]);/* оптимизируем строку */
        /* возвращаем обработанный обект с помощью функции
        и передаем его в RandomChar */        
    }

    const getComicsList = async (offset) => {
        const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`)
        return res.data.results.map(_transformComics)
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    }

    const _transformComics = (comics) => {           
        return {  
            id: comics.id,          
            title: comics.title,
            /* вытаскиваем имя у первого элема */ /* `${char.decription.slice(0, 210)}...` */
            description: comics.description || "Description: Impossible! There is no description! We must contact the Avengers to get some information. Quickly, Quickly!",
            pageCount: comics.pageCount 
                     ? `${comics.pageCount} p.`
                     : "Page Count: The Universe can't handle the capcity of this Incredible Comic Book. That why there no page count numbers!",
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            /* получаем сразу два значения какртинку и расширение картинки */
            //  language: comics.textObject[0]?.language || "en-us",
            price: comics.prices[0].price
                 ? `${comics.prices[0].price}$`
                 : "Price: That thing can not to be owned, it's too big and too valuable that human can prisist. Only gods of planet Vulkan can!"
        }
        } 

    const _transformCharacter = (char) => {           
        return {  
            id: char.id,          
            name: char.name,/* вытаскиваем имя у первого элема */ /* `${char.decription.slice(0, 210)}...` */
            description: char.description ? `${char.description.slice(0, 210)}...` : 'Unfortunately no information avaliable for these character/group. You can contact developers of Marvel API or just wait for someone to add character information.',
            /* сверху мы проверяем есть ли чтото в description и если есть то мы обрезаем до 210 символов 
            если нет то заменяем сообщением */
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension, /* получаем сразу два значения какртинку и расширение картинки */
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items}
        }     
    return {loading, error, getAllCharacters, getCharacter, getComicsList, getComic, clearError}
    // да да мы вытаскиваем из функции то что мы брали из usehttp это круто!  
    
}


export default useMarvelService
/* я поменял настрйоки в package.json чтобы у меня подгружались старые 
node modules сама настройка ниже показана:
"start": "react-scripts --openssl-legacy-provider start" */