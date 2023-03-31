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
import {FormControl, FormLabel} from "@material-ui/core";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

type LoginFormValuesTypeKeys = GetStringKeys<FormDataType>


const Login: React.FC<LoginFormOwnProps> = () => {
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
        <div className={s.container}>
            <FormLabel className={s.text}>
                <p>
                    To log in get registered <a href={'https://social-network.samuraijs.com/'}
                                                target={'_blank'}>here</a>
                </p>
                <p>
                    or use common test account credentials:
                </p>
                <p> Email: free@samuraijs.com
                </p>
                <p>
                    Password: free
                </p>
            </FormLabel>
            <div className={s.titleForm}>
                <h2 className={s.title}> LOGIN: </h2>

                <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
            </div>

        </div>
    </div>
}

const mapStateToProps = (state: ReduxStateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {LoginTC})(Login);