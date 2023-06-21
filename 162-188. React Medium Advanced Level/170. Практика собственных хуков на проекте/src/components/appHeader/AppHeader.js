import {Link, NavLink} from 'react-router-dom';
// ссылка для элементов
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                <a href="#">
                    <span>Marvel</span> information portal
                </a>
                </Link>
                
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink end style={( {isActive} ) => ({color: isActive ? '#9f0013' : 'inherit'})} to="/">Characters</NavLink></li>
                    {/* style тут мы проверяем isActive данная переменная зашита в react router
                    и если она активна то мы просто берем меняем цвет */}
                    /
                    <li><NavLink style={( {isActive} ) => ({color: isActive ? '#9f0013' : 'inherit'})} to="/comics">Comics</NavLink></li>
                    {/* при активной ссылке у нас будет меняться цвет на заданной */}
                    {/* (exact или end в новой версии) нужен для четкого сравнения т.е. в адресе нашего сайте есть одинаковые символы
                    то подкрашиваться будет именно тот который выбран, а не все похожие на него элементы */}                    
                </ul>
            </nav>
        </header>
    )
}
/* activeStyle={{'color': '#9f0013'}}  это стырай вариант добавления стиля активности*/
export default AppHeader;