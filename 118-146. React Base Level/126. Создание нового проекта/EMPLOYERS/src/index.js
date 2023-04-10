import React from 'react';
import ReactDOM from 'react-dom/client';
/* используем для рендеринга */
import './index.css';
import App from './components/app/app';
/* импортируем наш файл */

const root = ReactDOM.createRoot(document.getElementById('root'));
/* создаем корневой уЗел и помещаем в элемент с id root */
root.render(  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
