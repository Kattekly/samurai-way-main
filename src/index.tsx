import React from 'react';
import './index.css';
import store from "./Redux/Redux-Stor";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

store.subscribe(rerenderEntireTree)
rerenderEntireTree()
