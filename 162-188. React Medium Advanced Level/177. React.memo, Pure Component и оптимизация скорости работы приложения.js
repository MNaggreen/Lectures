import {useState, memo, PureComponent} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

function propsCompare(prevProps, nextProps) {
    return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text;
}
// это такой интересный способ проверить содержимое вложенного объекта
// и если все нормально то перендеринга не будет

// просто оборачиваем memo всю функцию чтобы избежать ререндеринга одиноковых компонентов
const Form = memo((props) => {
    console.log(render);
    // каждый раз когда мы будем вводить текст и нажмем кнопку click me
    // render будет срабатывать
    // интересный факт даже если мы ничего небудм изменять в тексте
    // то все равно после click me будет происходить ререндер
    // это нормальное поведение так как обекты не равны друг другу
    // даже если содержимое в них одинаково
    // для этого нам пригодится хук useMemo который оычно используется для 
    // оптимизации он проверит изменилось ли содержимое объекта и, затем
    // даст команду на ререндиринг или же  его запретит

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input value={props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}, propsCompare)
// первый элемент это компонент который будет меморизироваться 
// а второй это функция ктороая вернет булевое значение дающее добро
// или наоборот запрет на ререндеринг

function App() {
    const [data, setData] = useState({
        mail: {
            name: "name@example.com"
        },
        text: 'some text'
    });
// если бы тут была такая конструкция то memo бы срабоатл даже без второго аргумента
// name: "name@example.com",
// text: 'some text'

    const onLog = useCallback( () => console.log('wow'))
    // эта функция должна использовать только с useCallback
    // иначе она будет каждый раз вызывать перерендеринг

    
    return (
                <>
            <Form mail={data.mail} text={data.text} onLog={onLog} />
            {/* если мы передаем функцию в props то нужно обязательно использовать
            useCallback так как функция рендериться и может вызвать перерисовку компонента  */}
            <button 
                onClick={() => setData({
                        mail: {
                        name: "name@example.com"
                     },                    
                    text: 'another text'
                    // если бы тут была такая конструкция то memo бы срабоатл даже без второго аргумента
                    // name: "name@example.com",
                    // text: 'some text'
                })}>
                Click me
            </button>
        </>
    );
}

export default App;
// memo можно например использовать при автоматичиских запросах например отображение курса валют
// которое обновляется каждую минуту и т.д.



// также проверить производительность приложения можно спомощь вкладки Profiler
// в разделе разработчика в chrome


















// КЛАССОВЫЕ КОМПОНЕНТЫ ДРУГАЯ ЧАСТЬ
// для классовых компонентов нужно использовать react.purecomponent
class FormClass extends PureComponent {

    shouldComponentUpdate(nextProps) {
        if (this.props.mail.name === nextProps.mail.name) {
            return false
        } return true
    }
    // это спец функция аналог функции выше которая проверит и запустит 
    // обновление компонента если старый стейт совпадает с новым
    // но такую функцию рекомендуют использовать осторожно такак
    // при большой вложенности возможно возниконовение багов 
    // а также данную функцию можно использовать без pureCOmponent
    // т.е. с обычным компонентом

    render() {
        console.log(render)

        return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input value={props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
    }
    
}