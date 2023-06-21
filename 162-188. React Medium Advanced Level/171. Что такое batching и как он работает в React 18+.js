// Batching Это когда react обьединяет несколько изменений состояния в одну 
// операцию для улчучшения производительности

import { useState, flushSync } from 'react';
// flushSync по сути ненужная команда так как он позволяет вернуть 
// старую функцию реакта без объединения изменений состояния

function TestComponent() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(flase);


function handleCLick() {
    setCount(c => c + 1);
    setFLag(f => !f)
}
console.log('render')
// react обединит оба ререндеринга в один и будет выводит слово render всего 1 раз за раз

// если бы было так то реакт бы срабатывал два раза
function handleCLickTimeoutBatching() {
    setTimeout(() => {
        setCount(c => c + 1);
    setFLag(f => !f);
    }, 100)
}

function handleCLickTimeoutNoBatching() {
    setTimeout(() => {
        flushSync(() => {setCount(c => c + 1);})
        // здесь batching работать уже небудит
        flushSync(() => {setFLag(f => !f);})
    }, 100)
}
  
    
}
return (
    <div>
        <button onClick={handleClick}>
        Next
        </button>
        <h1 style={{color: flag ? "blue" : black}}>{count}</h1>
    </div>
)
}