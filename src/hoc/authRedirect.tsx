import React, {Component, ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {ReduxStateType} from "../Redux/redux-stor";


type IsAuthPropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: ReduxStateType): IsAuthPropsType => ({
    isAuth: state.auth.isAuth
})


function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: IsAuthPropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
};

export default withAuthRedirect;