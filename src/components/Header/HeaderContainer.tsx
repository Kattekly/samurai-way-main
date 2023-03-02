import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {initialStatePropsType, LogOut} from "../../Redux/auth-reducer";
import {ReduxStateType} from "../../Redux/redux-stor";

class HeaderContainer extends React.Component<any, any> {

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logOut={LogOut}/>
    }
}

const mapStateToProps = (state: ReduxStateType): initialStatePropsType => ({
    id: state.auth.id,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {LogOut})(HeaderContainer);