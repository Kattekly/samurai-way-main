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
import state, {ProfilePageType, RootStateType} from "./Redux/State";

type AppPropsType = {
    state: RootStateType
    addPost?: (newMessage: string) => void
    updateNewPostText?: (newText: string) => void
}

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.profilePage.dialogs}
                                                              messages={props.state.profilePage.messages}/>}/>
                <Route path="/profile" render={() => <Profile posts={props.state.messagePage.posts}
                                                              addPost={props.addPost}
                                                              newPostText={props.state.messagePage.newPostText}
                                                              updateNewPostText={props.updateNewPostText}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
