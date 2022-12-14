import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {ReduxStateType} from "./Redux/Redux-Stor";
import Preloader from "./components/common/Preloader/Preloader";

// export type AppPropsType = {
//     addPost?: (newMessage: string) => void
//     updateNewPostText?: (newText: string) => void
//     /* store: Store<ReduxStateType, ActionTypes>*/
// }

// export type MessageType = {
//     newPostText: string
//     posts: Array<PostType>
//     addPost?: (newMessage: string) => void
//     updateNewPostText?: (newText: string) => void
//     dispatch?: (action: ActionTypes) => void
//     newMessageText?: string
//  }


type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type AppType = mapDispatchToPropsType & mapStateToPropsType

class App extends React.Component<AppType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        // const state = props.store.getState()
        if (!this.props.initialized) return <Preloader/>

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
}

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(connect(mapStateToProps, {initializeApp}), withRouter)(App)