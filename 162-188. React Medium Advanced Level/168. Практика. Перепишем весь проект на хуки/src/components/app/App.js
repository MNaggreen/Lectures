import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';

import PropTypes from 'prop-types'
/* чтобы проверять тип данных нам нужен PropTypes ог устанавливается отдельно
npm i prop-types все это работает в режиме разработк*/

const App = () => {

    const [selectedChar, setChar] = useState(null);
    /* state = { это мы заменили стркоой выше
        selectedChar: null
    } */

    const onCharSelected = (id) => { 
        setChar(id)
}
    /* onCharSelected = (id) => { */ /* 2(37) шаг принимаем id из charList (37 я на писал для того чтобы не перепутать с другими шагами)*/
        /* this.setState({
            selectedChar: id
        }
        )
    } */

    
        return (
            <div className="app">{/* app передаст состояние в charInfo */}
                <AppHeader/>
                <main>
                    <ErrorBoundary>
                        <RandomChar/>
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary>
                            <CharList onCharSelected={onCharSelected}/>{/* из charList передадим состояние в app */}
                        </ErrorBoundary>
                        <ErrorBoundary> {/* это предохранитель которым мы оборачиваем */}
                            <CharInfo charId={selectedChar}/>{/* 3(37) uсюда мы передаем id которое получили из charList */}
                        </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )         
}

CharList.propTypes = {/*  проверяем действительно ли номер приходит */
/* данное сообщение выпадет только в консолт */
    onCharSelected: PropTypes.func /* чтобы предупреждения нету меняем на Number на func */
}


export default App;