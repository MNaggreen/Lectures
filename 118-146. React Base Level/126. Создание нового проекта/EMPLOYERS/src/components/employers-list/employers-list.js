import EmployersListItem from '../employers-list-item/employers-list-item'
import './employers-list.css'

const EmployersList = ({data, onDelete, onToggleProp/* onToggleIncrease, onToggleRise */}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        /* частичная деструтуризация
        так мы вытаскиваем id */

        return (
            <EmployersListItem 
            key={id} 
            {...itemProps} 
            onDelete={() => onDelete(id)} /* передаем функцию */ 
            /* onToggleIncrease={() => onToggleIncrease(id)} */
            /* вызывваем функцию из app.js */
            /* onToggleRise={() => onToggleRise(id)} */
            /* либо так либо так name={item.name} salary={item.salary} */
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
            /* получаем имя атрибута rise или encrease */
        )
        /* данная функци будет перебирать наш массив с именами
        который мы получили в app.js или с сервера
        и сразу подставлять как цикл в каждый элемент */
    })

    return (
        <ul className="app-FileList list-group">
            {elements}
            {/* тут будет вся структура которую
             мы получим с помощью map */}
        </ul>
    )
}
/* при изменении класса все дочерние элементы перерисовываются
чтобы каждый раз не перерисовывать все элемент
у нас должен быть атрибут key у каждого элемента */

export default EmployersList;

/* 
129. Работа со списками и алгоритм согласования 
при уничтожении корневого div все элементы в перерисовываються
если меняет родитель то все перестраивается внутри
*/