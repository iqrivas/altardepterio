import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';

const container = document.getElementById('root');

ReactDOM.render( 
    <Badges/>
    ,container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


//<React.StrictMode>
//  <App />
//</React.StrictMode>,
//document.getElementById('root')