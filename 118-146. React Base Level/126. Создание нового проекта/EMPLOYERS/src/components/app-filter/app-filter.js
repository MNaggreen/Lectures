
import './app-filter.css';


const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', 'label': 'Все сотрудники', colored: false},
        {name: 'rise', 'label': 'На повышение', colored: false},
        {name: 'moreThen1000', 'label': 'З/П больше 1000$', colored: false}
    ];/* создаем массив с кнопками */ /* тут colored используется исключительно для примера */

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name;
        /* если название кнопки совпадает с названеи филльра */
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        /* формируем наш класс по значению кнопки который каждые раз будет менять при нажатии */
        return (
            <button 
                className={`btn ${clazz}`}
                /* динамично вставляем класс */
                type="button"
                key={name}
                onClick= {() => props.onFilterSelect(name)}
                style={colored ? {color: 'red'} : null}  >{/* если там стоит true то мы меняем цвет на краснфый это называется динамические классы */}
                    {/* передаем значение для filter */}
                  
                    {label}
                </button>
        )
    })

    
        return (
        <div className="btn-group">
            {buttons}
            {/* <button 
                className="btn btn-light"
                type="button"
                onClick={this.props.filterPost(this.props.data)}>
                    Все сотрудники
                </button>                
            <button 
                className="btn btn-outline-light"
                type="button"> */}
                    {/* это bootstrap класс */}                    
                   {/*  На повышение
                </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    З/П больше 1000$
                </button> */}
        </div>
    )
}



export default AppFilter;