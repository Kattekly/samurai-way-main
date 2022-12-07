import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {ReduxStateType} from "../Redux/Redux-Stor";


type IsAuthPropsType = {
    isAuth?: boolean
}

let mapStateToPropsForRedirect = (state: ReduxStateType): IsAuthPropsType => ({
    isAuth: state.auth.isAuth
})


const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
};

export default withAuthRedirect;