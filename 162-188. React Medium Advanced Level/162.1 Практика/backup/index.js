import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <App counter={0}/>,
    /* передаем 0 как начальное значение */
  document.getElementById('root')
);


