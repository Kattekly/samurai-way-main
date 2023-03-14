import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {ButtonSubmit, CheckboxTC, TextareaFC} from "../common/FormControls/FormsControls";
import s from './Login.module.css'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type PropsType = {
    captchaUrl: string | null
}
const LoginForm: React.FC<PropsType & InjectedFormProps<FormDataType, PropsType>> = ({handleSubmit, error, captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            {error && <div className={s.error}> {error} </div>}
            <div className={s.data}>
                <Field placeholder='Email'
                       type='text'
                       name='email'
                       variant='standard'
                       component={TextareaFC}
                       validate={[required]}
                />
            </div>
            <div className={s.data}>
                <Field placeholder='Password'
                       type='password'
                       name='password'
                       variant='standard'
                       component={TextareaFC}
                       validate={[required]}
                />
            </div>
            <div className={s.data}>
                <Field type='checkbox'
                       component={CheckboxTC}
                       label='remember me'/>
            </div>

            {
                captchaUrl && <>
                    <img src={captchaUrl} alt='captcha'/>
                    <div className={s.data}>
                        <Field placeholder='Captcha'
                               type='text'
                               name='captcha'
                               variant='standard'
                               component={TextareaFC}
                               validate={[required]}
                        />
                    </div>
                </>
            }

            <div className={s.button}>
                <ButtonSubmit form={LoginForm}/>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm<FormDataType, PropsType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)