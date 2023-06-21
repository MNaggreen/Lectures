// useId хук для формирования уникальноко идентификатора но его нельзя использовать 
// для формирования атрибута Key 
// querySelectorAll не будет работать с Id созданным с помощью этого хука!

// конкурентный режим ввелся после 18 версии
// теперь рект может внутри себя выполнять несколько рендеров ставить их 
// на паузу и т.д. реакт сам все это делает



import data from './data';
import {useState, useMemo, useDefferedValue, useTransition} from 'react';
// const defferedValue = useDefferedValue(text)
// мы говорим react что текст отрисовать нужно именно тогда,
// когда текст в поле ввода уже будет введен а не после каждой буквы
// разница будет заметна на боллее слабых компьютерах

const [isPending, startTransition] = useTransition();
// 1 аргумент поможет отслеживать состояние допустим можно указать что is pending true
// 2 аргумент это переключение isPending из одной позиии в другую
// и тогда будет активен спиннер в это время
// useTransition может позволить нам указывать реакту когда и как отложить
// перерисовку 

function App() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);

    const filteredPosts = useMemo(() => {
        return posts.filter(item => item.name.toLowerCase().includes(text));
    }, [text]);

    const onValueChange = (e) => {
        startTransition(() => {
            setText(e.target.value);
        });
        // gпри вводе текста запуститься загрузка и по завершеннии поиска нам 
        // выведутся результаты или просто когда у нас подвисает загрузка компонента
        
    }

    return (
        <>
            <input value={text} type='text' onChange={onValueChange}/>

            <hr/>

            <div>
                {/* тут все понятно если pending true то будет работать загрузка */}
                {isPending ? <h4>Loading...</h4> : 
                filteredPosts.map(post => (
                    <div key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;

// все эти хуки стоит использовать с большим списком динамических данных
