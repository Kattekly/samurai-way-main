import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../common/FormControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect, useDispatch, useSelector} from "react-redux";
import {LoginTC} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";
import {ReduxStateType} from "../../Redux/Redux-Stor";
import s from './../common/FormControls/FormsControls.module.css'

type LoginFormOwnProps = {
    captchaUrl: string | null
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], Input)}
            {createField<LoginFormValuesTypeKeys>('Password', 'password', [required], Input, {type: 'password'})}
            {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [required], Input, {})}


            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const ReduxLoginForm = reduxForm<FormDataType, LoginFormOwnProps>({form: 'login'})(LoginForm)

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
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

    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
}

const mapStateToProps = (state: ReduxStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {LoginTC})(Login);