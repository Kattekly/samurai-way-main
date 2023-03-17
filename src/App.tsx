import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {ReduxStateType} from "./Redux/redux-stor";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import {ProfileDataForm} from "./components/Profile/My posts/ProfileInfo/ProfileDataForm";

//lazy loading
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const Login = React.lazy(() => import("./components/Login/Login"));

type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type AppType = mapDispatchToPropsType & mapStateToPropsType

class App extends React.Component<AppType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error')
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <div>
                <div>
                    <HeaderContainer/>
                    <div className="app-wrapper">

                        <Navbar/>
                        <div className='app-wrapper-content'>
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>

                                <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                                <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                                <Route path="/users" render={withSuspense(UsersContainer)}/>
                                <Route exact path="/login" render={withSuspense(Login)}/>

                                <Route path="/edit" component={ProfileDataForm}/>

                                <Route path="/news" component={News}/>
                                <Route path="/music" component={Music}/>
                                <Route path="/settings" component={Settings}/>
                                <Route path='*' render={() => <div className="content" style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    width: "100%",
                                    justifyContent: "center"
                                }}><h1>404: PAGE NOT FOUND</h1></div>}/>
                            </Switch>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(connect(mapStateToProps, {initializeApp}), withRouter)(App)