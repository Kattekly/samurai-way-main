import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionTypes, DialogType, PostType, RootStateType, StorePropsType} from "./Redux/State";

export type AppPropsType = {
    addPost?: (newMessage: string) => void
    updateNewPostText?: (newText: string) => void
    store: StorePropsType
}

export type MessageType = {
    newPostText?: string
    posts: Array<PostType>
    addPost?: (newMessage: string) => void
    updateNewPostText?: (newText: string) => void
    dispatch: (action: ActionTypes) => void
    newMessageText?: string
}


const App = (props: AppPropsType) => {
    const state = props.store.getState()

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs" render={() => <Dialogs store={props.store}
                    /*dialogs={state.profilePage.dialogs}
                    messages={state.profilePage.messages}
                    newMessageText={state.profilePage.newMessageText}
                    dispatch={props.store.dispatch.bind(props.store)}*/
                />}/>
                <Route path="/profile" render={() => <Profile posts={state.messagePage.posts}
                                                              dispatch={props.store.dispatch.bind(props.store)}
                    /*addPost={props.store.addPost.bind(props.store)}*/
                    /*newPostText={state.messagePage.newPostText}*/
                    /*updateNewPostText={props.store.updateNewPostText.bind(props.store)}*//>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
