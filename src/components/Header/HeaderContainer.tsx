import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {initialStatePropsType, setAuthUserData} from "../../Redux/AuthReducer";
import {ReduxStateType} from "../../Redux/Redux-Stor";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} />
    }
};

const mapStateToProps = (state: any): initialStatePropsType => ({
    id: state.auth.id,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);