import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {initialStatePropsType, LogOut} from "../../Redux/auth-reducer";
import {ReduxStateType} from "../../Redux/redux-stor";

type mapStateToPropsType = {
    id: number | null
    email: string | null
    isAuth: boolean
    login: string | null
    captchaUrl: string | null
    avatar: string
}

type mapDispatchToPropsType = {
    LogOut: () => void
}

type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {
    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logOut={LogOut} avatar={this.props.avatar}/>
    }
}

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
    id: state.auth.id,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    captchaUrl: state.auth.captchaUrl,
    avatar: state.messagePage.profile.photos.large
})

export default connect(mapStateToProps, {LogOut})(HeaderContainer);