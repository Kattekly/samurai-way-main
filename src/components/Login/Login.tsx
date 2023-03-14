import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../common/FormControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect, useDispatch, useSelector} from "react-redux";
import {LoginTC} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {ReduxStateType} from "../../Redux/redux-stor";
import s from './Login.module.css'
import {FormDataType, LoginReduxForm} from "./LoginForm";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

type LoginFormValuesTypeKeys = GetStringKeys<FormDataType>


const Login: React.FC = () => {
    const captchaUrl = useSelector((state: ReduxStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: ReduxStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: FormDataType) => {
        dispatch(LoginTC(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return  <div>
        <div className={s.container}>
            <h2 className={s.title}> LOGIN: </h2>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    </div>
}

const mapStateToProps = (state: ReduxStateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {LoginTC})(Login);