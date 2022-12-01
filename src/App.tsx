import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionTypes, PostType} from "./Redux/State";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

export type AppPropsType = {
    addPost?: (newMessage: string) => void
    updateNewPostText?: (newText: string) => void
    /* store: Store<ReduxStateType, ActionTypes>*/
}

export type MessageType = {
    newPostText: string
    posts: Array<PostType>
    addPost?: (newMessage: string) => void
    updateNewPostText?: (newText: string) => void
    dispatch?: (action: ActionTypes) => void
    newMessageText?: string
}


const App = (props: AppPropsType) => {
    // const state = props.store.getState()

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <Login/>}/>


                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>

            </div>
        </div>
    );
}

export default App;
