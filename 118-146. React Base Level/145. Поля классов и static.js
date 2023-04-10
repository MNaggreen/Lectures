class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    /* это старый код */


class Employers extends Component {
    state = {
        name: '',
        slary: ''
    }
    
    static onLog = () => {
        console.log('Hey');
    }

    static logged = 'on';
}
/* без конструктора можно! ЭТО НОВЫЙ КОД*/




Employers.onLog();
/* вызываем статитческий метод класса*/
console.log(Employers.logged)
/* Это будем редко использовать это нужно для использование переменной одной и той же
чассто */