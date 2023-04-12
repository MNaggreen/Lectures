import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';
import './randomChar.scss';
/* import thor from '../../resources/img/thor.jpeg'; старая картинка для превью*/
import mjolnir from '../../resources/img/mjolnir.png';


class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateChar();
        /* вызываем через конструктор нашу функци
        в момент конструирования state */
        /* это плохая практика так делать нельзя */
    }
    
    state = {
        char: {},
        loading: true,/*  Это свойство дял спиннера */
        error: false/* это чтобы сайт не ломался если у нас загружен персонаж которого нет */
        /* name: null,
        description: null,
        thumbnail: null,
        homepage: null,
        wiki: null */
    }/* эти данные мы будем получать с сервера и с помощью них 
    показывать героя на странице */

    marvelService = new MarvelService();
    /* создаем экземпляр класса тут будет храниться потом класса */

    onCharLoaded = (char) => {
        this.setState({
            char: char, 
            loading: false
        });/* на его местоприходит обект который будет записываться в state */
    }/* как только стейт измениться он изменит за собой и наш char */

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });/* изменяем наш state ошибки на true что бы показать пользователю это ошибку */
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);/* целые числа (рандомное число * минимальный номер - максимальный) + минамальное значение*/
        /* временное id */ /* в работе с любым api мы должны ументь правильно обращаться к серверу
        и с этим нам должен помочь backend */
        this.marvelService
        .getCharacter(id) /* вызываем функцию с заготовленным id */
        .then(this.onCharLoaded)/* аргумент автомотически подставляеться когда мы используем tehn */
        .catch(this.onError);
        /* если выпадет ошибка то вызовется метод который покаже сообщение */
    }

    
    
    render() {
        const {char, loading, error} = this.state;/* вытаскиваем из свойства char все его сущности */
        const errorMessage = error ? <ErrorMessage /> : null;/* если ошибка есть */
        const spinner = loading ? <Spinner /> : null;/* если загрузка */
        const content = !(loading || error) ? <View char={char} /> : null;
        /* если нет загрузки или нет ошибки возврахаем view */
       
       
       
        /* if (loading) dвозвращаем если загрузка это условный рендеринг  */
         /*    return <Spinner/> */
        
        /* {loading ? <Spinner/> : <View char={char}/>} */
        return (
            <div className="randomchar">
                {errorMessage}
                {spinner}
                {content}
                {/* если у нас loading true то отображаем спиннер если нет отображаем наш блок с героем те передаем значение в локльный компонент*/}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }   
}

const View = ({char}) => {
    /* простой компонент который отображает только без запросов и тд */
    const {name, description, thumbnail, homepage, wiki} = char;
    return (
            <div className="randomchar__block">
                <img src={thumbnail} alt="Random character" className="randomchar__img"/>
                <div className="randomchar__info">
                    <p className="randomchar__name">{name}</p>
                    <p className="randomchar__descr">
                        {description}
                    </p>
                    <div className="randomchar__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
 )
}


export default RandomChar;