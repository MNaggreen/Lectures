import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';
import './comicsList.scss';
// import uw from '../../resources/img/UW.png';
// import xMen from '../../resources/img/x-men.png';
//  npm i react@latest это поможет обновить react до последней версии
// react-dom@latest --save

const ComicsList = () => {    
    const [comicsList, setComicsList] = useState([]);   
    // создали состояние    
    const [newItemLoading, setNewItemLoading] = useState(false);
    // это для того чтобы указать кнопке что новый персонаж загружается
    const [offset, setOffset] = useState(0);
    // это для списка комиксов каждый раз мы прибавляем его чтобы подгрузить новых
    const [charEnded, setCharEnded] = useState(false);
    // это для того чтобы указать что комиксы закончились

    const {loading, error, getComicsList} = useMarvelService();
    // вытаскиваем переменные ффункции

    useEffect(() => {
        onRequest(offset, true);
    }, [])
        /* const timerId = setInterval(updateChar, 60000);
        return () => {
            clearInterval(timerId)
        } */
    
    /* тут мы проверяем изменился ли наша id и если изменился то мы обновляем */

    // iniеtal всегда будет true он будет запускаться только при первой загрузке
    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        // при подгрузке персонажей старые не будут проподать
        getComicsList(offset)
            .then(onComicsListLoaded);
    }

    const onComicsListLoaded = (newComicsList) => {
        /* из этйо функции мы вернем объект */ 
        /* она запуститься ка только мы получим список */
        /* обновляем стейт по запросу componentDidMount */
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true; 
        /* проверяем есть ли в массиве персонажи если нет то тогда больше не добавляем */
            }
        setComicsList(comicsList => [...comicsList, ...newComicsList]);
        // с помощью деструтуризации добавляем к старому массиву новый массив с персонажами
        /* setLoading(loading => false); */
        setNewItemLoading(false);
        // выключаем загрузку для кнопки (кнопка станет активна)
        setOffset(offset + 8);
        // добовляем к нашему офсету 8 единиц для того чтобы в следующий раз появились новые комиксе а не теже старые
        setCharEnded(ended);  
        // переносим значение переменной ended если персонажи закончились то новые уже точно не будут подгружаться 
    }    
    
    function getCharComics(comicsList) {    
        // принимаем и перебираем список и выводим сразу 
        const items = comicsList.map((item, i) => { 

                    return (                       
                        <li className="comics__item" key={i}>
                        <Link to={`/comics/${item.id}`}>
                            {/* переход на страницу комикса */}
                            <img 
                            src={item.thumbnail} 
                            alt={item.title}
                            className="comics__item-img"/> 
                            <div className="comics__item-name">{item.title}</div>
                            <div className="comics__item-price">{item.price}</div>
                        </Link>
                    </li>                   
            )        
        })             
            
        // А эта конструкция вынесена для центровки спиннера/ошибки                
        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

    const content = getCharComics(comicsList)  
    // отправлеям на перебор наш список комиксов
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;      
          
    return (            
                <div className="comics__list">      
                    {errorMessage}                    
                    {content}
                    {spinner}
                    <button 
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{'display': charEnded ? 'none' : 'block'}}
                    onClick={() => onRequest(offset)}
                    >
                        <div className="inner">load more</div>
                    </button>          
                </div>
            )
             }



 
     
        
  
        



// const View = ({comics}) => {
//     const comicsFullList = AllComics(comics)
//     AllComics(comics.comics);
//     return (
//     <div className="comics__list">
//         {comicsFullList}

//              <li className="comics__item">
//                 <a href="#">
//                     <img src={xMen} alt="x-men" className="comics__item-img"/>
//                     <div className="comics__item-name">X-Men: Days of Future Past</div>
//                     <div className="comics__item-price">NOT AVAILABLE</div>
//                 </a>
//             </li>
//             <li className="comics__item">
//                 <a href="#">
//                     <img src={uw} alt="ultimate war" className="comics__item-img"/>
//                     <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
//                     <div className="comics__item-price">9.99$</div>
//                 </a>
//             </li>
//             <li className="comics__item">
//                 <a href="#">
//                     <img src={xMen} alt="x-men" className="comics__item-img"/>
//                     <div className="comics__item-name">X-Men: Days of Future Past</div>
//                     <div className="comics__item-price">NOT AVAILABLE</div>
//                 </a>
//             </li>
//             <li className="comics__item">
//                 <a href="#">
//                     <img src={uw} alt="ultimate war" className="comics__item-img"/>
//                     <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
//                     <div className="comics__item-price">9.99$</div>
//                 </a>
//             </li>
//             <li className="comics__item">
//                 <a href="#">
//                     <img src={xMen} alt="x-men" className="comics__item-img"/>
//                     <div className="comics__item-name">X-Men: Days of Future Past</div>
//                     <div className="comics__item-price">NOT AVAILABLE</div>
//                 </a>
//             </li>
//             <li className="comics__item">
//                 <a href="#">
//                     <img src={uw} alt="ultimate war" className="comics__item-img"/>
//                     <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
//                     <div className="comics__item-price">9.99$</div>
//                 </a>
//             </li>
//             <li className="comics__item">
//                 <a href="#">
//                     <img src={xMen} alt="x-men" className="comics__item-img"/>
//                     <div className="comics__item-name">X-Men: Days of Future Past</div>
//                     <div className="comics__item-price">NOT AVAILABLE</div>
//                 </a>
//             </li> 
        
//          <button className="button button__main button__long">
//             <div className="inner">load more</div>
//         </button>
//     </div>
//     )} 


export default ComicsList;



/* const AllComics = ({char}) => { */
    /* const {name, description, thumbnail, homepage, wiki} = char; */
    /* console.log(char.comics[0].name)
    console.log(char.comics) */
    /* console.log(char.comics.map((item) => {
        let arr = [...item]
        return arr
    })) */
    // const items = char.comics.map((item, i) => {
    //   const items = props.comics.map((item, i) => {             
     /* key={i} >
                 {/* <a href="#">
                    <img src={uw} alt="ultimate war" className="comics__item-img"/> 
                    <div className="comics__item-name">{char.comics[0].name}</div>
                    <div className="comics__item-price">9.99$</div> 
                </a>
            </li>             
            )     */
        // })
        // return {items}
        
        // })      
         
    /* }  */