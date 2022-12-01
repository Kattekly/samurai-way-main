import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getLogin, initialStatePropsType, setAuthUserData} from "../../Redux/AuthReducer";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getLogin()

        /* MyLoginAPI.getHeader().then(data => {
             if (data.resultCode === 0) {
                 let {id, email, login} = data.data
                 this.props.setAuthUserData(id, email, login);
             }
         })*/
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: any): initialStatePropsType => ({
    id: state.auth.id,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getLogin})(HeaderContainer);