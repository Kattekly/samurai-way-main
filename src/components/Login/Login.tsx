import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const LoginForm: React.FC<InjectedFormProps<>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

export default Login;