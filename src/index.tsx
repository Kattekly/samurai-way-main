import React from 'react';
import './index.css';
import store, {StorePropsType} from "./Redux/State";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (store: StorePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost} updateNewPostText={store.updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store._state)
store.subscribe(rerenderEntireTree)