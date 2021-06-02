import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const container = document.getElementById('app')

const element = <App/>

//ReactDOM.render(que , donde) = appendChild
ReactDOM.render(element, container);