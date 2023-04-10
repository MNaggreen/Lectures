import { Component } from 'react';
/* 1. импортируем наш компонет для создания класса */
import './employers-add-form.scss';
/* берем sass стили */
/* чтобы sass работал нужно его установить
npm i sass --save сохранить зависимость */


class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    /* 2. создаем наше состояние */

    onValueChange = (e) => {
        /* 4. создаем нашу функцию которая будет срабатывать */
        this.setState({
        [e.target.name] : e.target.value
        
        })
        /*6. записываем свойство в обект по имени 
        один обработчик события работает на двух импутах*/
    }

     onSubmit = (e) => {
        e.preventDefault();
        /* запрещаем брузеру обновлять страницу */
        if (this.state.name.length > 1 && this.state.salary > 500) {
            this.props.onAdd(this.state.name, this.state.salary);
        /* вызываем и передаем функции значения воода */
        } else {
            alert(' Ошибка. Проверьте правильность введенного имени или зарплаты!')
        }        
        this.setState({
            name: '',
            salary: ''
        })
        /* очищаем полу ввода */
    } 

    render() {
        const {name, salary} = this.state;
        /*8. заготавливаем значения для value */
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                        {/* назначаем функцию кнопке */}
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name="name"
                        /* 5. назначаем нашему атрибуту имя */
                        value={name}
                        /* 7. создаем значение это называется управляемый элемент
                        так нужно делать всегда!*/
                        onChange={this.onValueChange} />
                        {/* 3. навешиваем обработчик события используя синтаксис ES6*/}

                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        /* 5. назначаем нашему атрибуту имя */
                        value={salary}
                        /* 7. создаем значение */
                        onChange={this.onValueChange} />
                        {/* 3. навешиваем обработчик события */}    

                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;