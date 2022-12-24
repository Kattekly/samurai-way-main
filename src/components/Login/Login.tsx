import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {LoginTC} from "../../Redux/AuthReducer";


export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
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

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

export default connect(null, {LoginTC}) (Login);