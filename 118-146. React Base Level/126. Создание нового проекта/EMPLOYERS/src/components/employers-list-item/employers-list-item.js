
import './employers-list-item.css';

const EmployersListItem = (props) => {   
        const {name, salary, onDelete, /* onToggleIncrease, onToggleRise */onToggleProp, increase, rise} = props;
        /* обращаемся к свойствам нашего класа */ 

        let classNames = "list-group-item d-flex justify-content-between";
        let spanClassName = "list-group-item-label";
        /* берем нашу строку с классами */

        if (increase) {
            classNames += ' increase' }
        /* добавляем класс increase
        если он true */

        if (rise) {
            classNames += ' like'
        }
        /* добавляем класс increase
        если он true */

        return (
            <li className={classNames}>
                {/* подставляем строку с классами */}
                <span className={spanClassName}
                    onClick={/* onToggleRise */ onToggleProp}
                    data-toggle="rise"
                    style={{fontSize: '40px', color: 'red', transition: 'all', webKitTransition: 'all'}}/*объект со стилями шрифт всегда стоит px если мы дебовили все остальное нужно самим
                    '40em' пример*/ /* неудобно тем что нам придтся ставить префиксы для старых браузеров самим webkit и т д
                    лучше использовать css классы*/
                    >{name}</span>{/* data toggle нужен для передачи и определиения нужной строки */}
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                {/* default value это значения по умолчанию для элемента */}
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={/* onToggleIncrease */ onToggleProp}
                        data-toggle="increase">
                            {/* передаем метод который принажатии будет менять */}
                            
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "                            
                            onClick={onDelete}>
                                {/* передаем нашу функцию */}
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
    


export default EmployersListItem;