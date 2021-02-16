import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

const container = document.getElementById('root');

ReactDOM.render( 
    <App/>
    , container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


//<React.StrictMode>
//  <App />
//</React.StrictMode>,
//document.getElementById('root')