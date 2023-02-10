import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {ReduxStateType} from "./Redux/Redux-Stor";
import Preloader from "./components/common/Preloader/Preloader";

//lazy
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

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
        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" render={() => {
                        return <React.Suspense fallback={<div>Loading...</div>}>
                            <DialogsContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path="/profile/:userId?" render={() => {
                        return <React.Suspense fallback={<div>Loading...</div>}>
                            <ProfileContainer/>
                        </React.Suspense>
                    }}/>
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