import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {rerenderEntireTree} from "./render";
import state from "./Redux/State";


rerenderEntireTree(state)
