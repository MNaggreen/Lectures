import './charList.scss';
import { useState, useEffect, useRef } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';
import PropTypes from 'prop-types';
/* импортируем проверку */


const CharList = (props) => {    
    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);    
    /* state = { */
        /* charList: [], */ /* почемуто это список? */
        /* loading: true, */ /*  Это свойство дял спиннера */
        /* error: false */ /* это чтобы сайт не ломался если у нас загружен персонаж которого нет */
        /* name: null,
        description: null,
        thumbnail: null,
        homepage: null,
        wiki: null, */
        /* newItemLoading: false, */ /* это для того чтобы сообщить кнопке что пресонажи загружаются */
        /* offset: 210, */ /* это у нас число для вставки в строку запроса 9 персонажей */
        /* charEnded: false */ /* это для определения закончились ли у нас персонажи если да */
    /* } */ /* эти данные мы будем получать с сервера и с помощью них 
    показывать героя на странице */

    const marvelService = new MarvelService();
    /* создаем обект который конструеруется при помощи класса MarvelService*/   

    useEffect(() => { /* вся эта функция это эмуляция componentDidMount */
        onRequest();
    }, []) /* useEffect запускается уже после рендера */
    /* любые обращения к серверу можно делать только после создания компонент что мы сделали выше */
    /* componentDidMount() { */ /* это хуки */
        /* this.onRequest(); */ /* в первый раз эта функция вызовется без аргумента
        аргументом по умолчанию выступит _baseOffset 210 */
        
        /* this.marvelService.getAllCharacters()    
            .then(this.onCharListLoaded) */
        /* !!!запускаем создание или обновление копонента после его непосредственно рендера !!!*/
            /* .catch(this.onError)
        console.log('mount'); */ /* 3 записался */       
    /* } */

    const onRequest = (offset) => {
        onCharListLoading();
        /* метод который будет срабатывать после нажатия на кнопку подгрузить ещё персонажей */
        marvelService.getAllCharacters(offset)  
             .then(onCharListLoaded) /* после успешной загрузки сообщаем и запускаем функцию onCharListLoaded с загруженными персонажеми */
            /* !!!запускаем создание или обновление копонента после его непосредственно рендера !!!*/
            .catch(onError)
    }

    const onCharListLoading = () => { 
        setNewItemLoading(true);
     }
    /* const onCharListLoading = () => { */ /* на это состояние будет оринтироваться наша кнопка */
        /* это для того чтобы показать что мы загружаем новых персонажей */
        /* this.setState({            
            newItemLoading: true
        })
    } */


    const onCharListLoaded = (newCharList) => {/* из этйо функции мы вернем объект */ /* она запуститься ка только мы получим список */
        /* обновляем стейт по запросу componentDidMount */
        let ended = false;
        if (newCharList.length < 9) {
            ended = true; /* проверяем есть ли в массиве персонажи если нет то тогда больше не добавляем */
        }
        setCharList(charList => [...charList, ...newCharList]);
        setLoading(loading => false);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
        /* this.setState(({offset, charList}) => ({ */ /* страый список персонажей */
            /* charList: [...charList, ...newCharList], */ /* прибавляем к уже имеющемуся списиску персонажей еще 9 персонажей */
            /* loading: false, */
            /* newItemLoading: false, */ /* когда наш лист персонажей загрузиться то переключаем обратно на false */
            /* offset: offset + 9, */ /* прибавляем чтобы еще раз загрузить 9 персонажей */
            /* charEnded: ended */ /* помещаем в state наше значение */

        /* })); */
        /* console.log(this.charList, 'CharList') */        
    }
  

    const onError = () => {
        setError(error => true);
        setLoading(loading => false);
        /* this.setState({
            loading: false,
            error: true */
        /* }); */ /* изменяем наш state ошибки на true что бы показать пользователю это ошибку */
    }   
    
    
    /* updateCharsButton = () => {        
        this.marvelService
        .getAllCharacters() */ /* вызываем функцию с заготовленным id */
        /* .then(this.onCharsLoaded) */ /* аргумент автомотически подставляеться когда мы используем tehn */
        /* .catch(this.onError)   */      
        /* если выпадет ошибка то вызовется метод который покаже сообщение */
        /* this.setState({ error: false })

    }    */
    const itemRefs = useRef([]);
      
    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'))
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    /* renderItems */ function AllChars(arr) {      
        /* это функция которая примет готовый СПИСОК с персонадами */
            const items = arr.map((item, i) => {
            const _notAvailable = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
            let checkImg = item.thumbnail === _notAvailable;  
                    return (                       
                            <li className="char__item"
                            tabIndex={0}
                            ref={el => itemRefs.current[i] = el} /* складываем элементы по порядку в наш ref */
                            key={item.id} 
                            /* onKeyPress{
                                (e) => {
                                    if (e.key === ' ' || e.key === "Enter") {
                                        props.onCharSelected(item.id);
                                        focusOnItem(i);
                                    }
                                }
                            } */
                            onClick={() => {
                                props.onCharSelected(item.id)
                                focusOnItem(i);
                                }}                            
                                >
                                <img 
                                src={item.thumbnail} 
                                alt={item.name} 
                                style={{ objectFit: checkImg ? 'contain' : 'cover' }}/>
                        <div className="char__name">{item.name}</div>
                            </li>                        
                            )        
                    }) 
            
            // А эта конструкция вынесена для центровки спиннера/ошибки     
            return (
                <ul className="char__grid">
                    {items}
                </ul>
            )      
            
    }

    
       
        
        
        
        const items = AllChars(charList);
        /* запускаем нашу функцию */
        const errorMessage = error ? <ErrorMessage /> : null;/* если ошибка есть */
        const spinner = loading ? <Spinner /> : null;/* если загрузка */
        const content = !(loading || error) ? items : null        
       
        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}/*  кнопка просто исчезнет колгда элементы закончатся */
                onClick={() => onRequest(offset)}/* передаем наш текущий offset */
                >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }  

    CharList.propTypes = {
        onCharSelected: PropTypes.func.isRequired
    }
   
     




export default CharList;
/* вот это он создаст */
 /* <div className="char__list">
            <ul className="char__grid">
                <li className="char__item">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item char__item_selected">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div> */