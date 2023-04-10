import logo from './logo.svg';
import {Component} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello world</h2>
}/* это уже прсотейший реакт кмпонент */

const Field1 = () => {
  const holder = 'enter here'
  const styledField ={
    width: '300px'
  };
  return <input 
          placegolder={holder} 
          type="text" 
          style={styledField}/>
}

class Field extends Component {
  /* как раньше все делали используя классы */
  /* стиоизуем и создаем наши переменные */
  render() {
    const holder = 'enter here'
    const styledField ={
    width: '300px'
  };
  /* возвращаем непосредственно наш тег */
  return <input 
    placegolder={holder} 
    type="text" 
    style={styledField}/>
  }
}

function Btn() {
  const text = 'Log in';
  const res = () => {
    return 'Log in';
  }
  const p = <p>Log in</p>
  const logged = true;

  return <button>{logged ? 'Enter' : text}{res()}{p}</button>
  /* уогда компонент будет формироваться
  функция запуститься и её результат поместиться в скобки */
  /* if else нельзя использовать в фигурных скобках */
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export {Header};
/* экспорт только функции */
export default App;
