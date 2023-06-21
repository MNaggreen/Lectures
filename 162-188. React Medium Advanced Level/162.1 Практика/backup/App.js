import {useState} from 'react';
import './styles.css';

const App = ({counter}) => {
  /* принимаем */
  
    // Используйте только стрелочную форму методов
    // Почему? Подробный ответ будет в следующем уроке
    
    
    const [count, setCount] = useState(counter);
    /* принимаем 0 как начальное значение */
    function changeCount(i) {
      setCount(count => count + i)    
    }
    function resetBtn() {
      setCount(count => 0)
    }
    function randomize() {
      setCount(count => Math.round(Math.random() * (50 -  (-50) + 1) + (-50)));
    }
    function convertMoney(i) {
      setCount(count => count * i)
    }
      return (
        <div class="app">
          <div class="counter">{count}</div>
          <div class="controls">
            <div class="controls__1">
            <button onClick={() => changeCount(+1)}>INC</button>
            <button onClick={() => changeCount(-1)}>DEC</button>
            <button onClick={() => randomize()}>RND</button>
            <button onClick={() => resetBtn()}>RES</button>
            </div>
            
            <div class="controls__2">
            <button onClick={() => convertMoney(80)}>DOL</button>
            <button onClick={() => convertMoney(80)}>EUR</button>
            <button onClick={() => convertMoney(4)}>LIR</button>
            <button onClick={() => convertMoney(6)}>PES</button>
            </div>
          </div>
        </div>
      )
    }
  
  
  
  
  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

export default App;
