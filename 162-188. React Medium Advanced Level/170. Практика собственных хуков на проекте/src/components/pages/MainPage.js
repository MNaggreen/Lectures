import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';

import PropTypes from 'prop-types';
// чтобы проверять тип данных нам нужен PropTypes ог устанавливается отдельно
// npm i prop-types все это работает в режиме разработк

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);
    // просто для пирмера ставим 210 было null
    // state = { это мы заменили стркоой выше
    //     selectedChar: null
    // }
    
    const onCharSelected = (id) => { 
        setChar(id)}
    //  onCharSelected = (id) => {  
    //     2(37) шаг принимаем id из charList (37 я на писал для того чтобы не перепутать с другими шагами)
    //      this.setState({
    //         selectedChar: id
    //     }
    //     )
    // } 

    return (
        <>
            {/* exact нужен для того чтобы у нас загружалосьиммено одна страницаа
            если его не поставить то будут загружаться все где сть слеш */}
            {/* это наша главная страница / */}
            {/* ссылки находятся в appheader */}
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
            <ErrorBoundary> 
                <CharList onCharSelected={onCharSelected}/>    
                {/* из charList передадим состояние в app */}
            </ErrorBoundary>  
            <ErrorBoundary>     
                {/* это предохранитель которым мы оборачиваем */}
                <CharInfo charId={selectedChar}/>   
                { /* 3(37) uсюда мы передаем id которое получили из charList */}
            </ErrorBoundary>  
            </div> 
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

// CharList.propTypes = {
    //  проверяем действительно ли номер приходит
    // данное сообщение выпадет только в консолт
    // onCharSelected: PropTypes.func 
    // чтобы предупреждения нету меняем на Number на func
// }

export default MainPage;