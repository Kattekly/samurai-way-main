import React from 'react';
import './index.css';
import store from "./Redux/Redux-Stor";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

store.subscribe(rerenderEntireTree)
rerenderEntireTree()
