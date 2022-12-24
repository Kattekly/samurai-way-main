import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {LoginTC} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";
import {ReduxStateType} from "../../Redux/Redux-Stor";


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} validate={[required]}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const ReduxLoginForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.LoginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: ReduxStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {LoginTC})(Login);