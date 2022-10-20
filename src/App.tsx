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
import {StorePropsType} from "./Redux/State";

type AppPropsType = {
    addPost?: (newMessage: string) => void
    updateNewPostText?: (newText: string) => void
    store: StorePropsType
}

const App = (props: AppPropsType) => {
    const state = props.store.getState()

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs" render={() => <Dialogs dialogs={state.profilePage.dialogs}
                                                              messages={state.profilePage.messages}/>}/>
                <Route path="/profile" render={() => <Profile posts={state.messagePage.posts}
                                                              addPost={props.store.addPost.bind(props.store)}
                                                              newPostText={state.messagePage.newPostText}
                                                              updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
