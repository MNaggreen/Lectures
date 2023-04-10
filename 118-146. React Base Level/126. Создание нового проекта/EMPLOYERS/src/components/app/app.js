import { Component } from 'react';

import AppInfo from '../app-info/app-info';

/* web pack импортирует сюда css */
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css'

class App extends Component {
    /* 6 41 */
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name:'Alex' , salary: 800, increase: false, rise: true, id: 1},
                {name:'John' , salary: 1000, increase: true, rise: false, id: 2},
                {name:'Peter' , salary: 3000, increase: false, rise: false, id: 3}
            ],
            term: '',            
            /* эту строчку мы получим из компонента search panel */
            filter: 'all'
            /* сюда мы будем записывать наш фильтр (зп больше 100 и т.д.) */  
        }
        this.maxId = 4            
    }
    
        /* имтация прихода данных с сервера */
        /* id это и есть наш ключ который необходим */
        /* все id должны буть уникальны только для отделбно взятого списка 
        т.е. глобально они могут совпадать */
        /* так же место id можно использовать index */
        /* все это нужна для увеллечения скорости работы react */


       


        deleteItem = (id) => {
            this.setState(({data}) => {
                /* const index = data.findIndex(elem => elem.id === id); */
                /* const before = data.slice(0, index);
                const after = data.slice(index + 1);
                const newArr = [...before, ...after]; */
                /* создаем массив используя срезы уже без элеменат*/
                /* console.log(newArr); */

                return {
                    data: data.filter(item => item.id !== id)
                    /* остануться те элементы которые не совпадают с id который нам пришел */
                }
            })
        }
        /* напрямую нельзя изменять массив 17 50 */

        addItem = (name, salary) => {
            /* функция по добавлению новых сотрудников */
            const newItem = {
                name,
                salary,
                increase: false,
                rise: false,
                id: this.maxId++
            }
            /* создаем новый объект */
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
                /* возвращаем новый измененный массив data */
            });
        }

        /* onToggleIncrease = (id) => {
            this.setState(({data}) => ({
                data: data.map(item => { */
                    /* перебираем и формируем массив */
                    /* if (item.id === id) {
                        return {...item, increase: !item.increase} */
                        /* если значение совпадает меняем ему свойство Increase */
                  /*   }
                    return item; */
                    /* возвращаем измененный элем*/
              /*   })
            })) */
            /* this.setState(({data}) => { */
                /* const index = data.findIndex(elem => elem.id === id) */
                /* получаем индекс */
                /* делаем копию */
                /* const old = data[index]; */
                /* старый */
                /* const newItem = {...old, increase: !old.increase}; */
                /* берет значение и меняет его на противоположное + разворот */
                /* const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; */
                /* вставляем наш подкрашенный ткест между другим работниками */
                /* это все для печеньки мы меняем increase на true Это самый сложный вариант*/
                /* return {
                    data: newArr
                } */
            /* }) */
        /* } */

        /* onToggleRise = (id) => {
            this.setState(({data}) => ({
                data: data.map(item => { */
                    /* перебираем и формируем массив */
                    /* if (item.id === id) {
                        return {...item, rise: !item.rise} */
                        /* если значение совпадает меняем ему свойство Increase */
                    /* } */
                    /* return item; */
                    /* возвращаем измененный элем*/
           /*      })
            }))
        }
 */
        /* снизу будет объединенный метод т.е. onToggleIncrease + onToggleRise
        это необязательный метод */

        onToggleProp = (id, prop) => {
            this.setState(({data}) => ({
                data: data.map(item => {
                    /* перебираем и формируем массив */
                    if (item.id === id) {
                        return {...item, [prop]: !item[prop]}
                        /* если значение совпадает меняем ему свойство Increase */
                    }
                    return item;
                    /* возвращаем измененный элем*/
                })
            }))
        }

        /* метод для поиска */
        searchEmp = (items, term) => {
            /* 1 строчка по которой ищем 2 массив который фильтруем */
            if (term.length === 0) {
                /* ничего не делаем если строка пуста */
                return items;
            }
            return items.filter(item => {
                return item.name.indexOf(term) > -1
                /* проверяем есть индекс у нашей строки поиска в массиве и если он отрицательный
                то нам просто вернеться нашмассив*/
            })
        }

        onUpdateSearch = (term) => {
            this.setState({term: term});
            /* передаем и изменяем состояние term на term из search panel */
        }     
        
        filterPost = (items, filter) => {/* массив и фильтр по которому будем фильтровать */
            switch (filter) {
                case 'rise':
                    return items.filter(item => item.rise);/* если items rise true мы вернем новый массив */
                case 'moreThen1000':
                    return items.filter(item => item.salary > 1000);                
                default:
                    return items
                    }
            }
        
        onFilterSelect = (filter) => {
            this.setState({filter})
        }/* изменяем filter по которому будет меняться кнопка */

        render() {
            const {data, term, filter} = this.state;
            const employees = this.state.data.length;
            /* считаем колво работников в массиве */
            const increased = this.state.data.filter(item => item.increase).length;
            /* фильтруем сотрудников на повышение increase = true */
            /* const visibleData = this.searchEmp(data, term); */
            /* создаем вызов функции массив data отфильтрованный по term*/
            /* комбинируем ниже */
            const visibleData = this.filterPost(this.searchEmp(data, term), filter);
            /* комбинируем методы */
           

            return (
                <div className="app">
                    <AppInfo employees={employees} increased={increased}/>
                    {/* передаем наши текущие значение в appinfo */}                    
                    <div className="search-panel">           
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter                                                
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                        /* передаем функцию по изменению фильтра */
                        />
                    </div> 
                    
                    <EmployersList 
                        data={visibleData}                                         
                        /* передаем */
                        onDelete={this.deleteItem}
                        /* onToggleIncrease={this.onToggleIncrease} */
                        /* onToggleRise={this.onToggleRise} */
                        onToggleProp={this.onToggleProp}
                        /> 
                    {/* передаем массив с данными */}
                    <EmployersAddForm onAdd={this.addItem}/>
                    {/* передаем функцию чтобы её можно было вызвать оттуда */}
                </div>
            )
        }
    
}

export default App;