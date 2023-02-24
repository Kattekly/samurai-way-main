import React from 'react';
import './index.css';
import store from "./Redux/Redux-Stor";
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);
