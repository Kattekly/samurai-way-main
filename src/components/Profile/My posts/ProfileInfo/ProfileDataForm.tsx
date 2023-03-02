import React, {FC} from "react";
import {NewType} from "./ProfileInfo";
import {Input, Textarea} from "../../../common/FormControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType, LoginForm} from "../../../Login/Login";
import s from './ProfileDataForm.module.css'
import {required} from "../../../../utils/validators/validators";

export type ProfileDataFormDataType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export const ProfileDataForm: FC<InjectedFormProps<ProfileDataFormDataType>> = (props) => {
    const {handleSubmit, error} = props
    const model = {
        facebook: '',
        website: '',
        vk: '',
        twitter: '',
        instagram: '',
        youtube: '',
        github: '',
        mainLink: '',
    }
    return <form onSubmit={handleSubmit} className={s.form}>
        <div><button>save</button></div>
        {error && <div className={s.error}> { error } </div>}
        <Field placeholder='Full name'
               type='text'
               name='fullName'
               component={Input}
               validate={[required]}
        />
        <Field placeholder='About'
               type='text'
               name='aboutMe'
               component={Textarea}
               validate={[required]}
        />
        <Field type='checkbox'
               name='lookingForAJob'
               component={Input}
               validate={[required]}
               label='Looking for a job'/>
        <Field placeholder='Skills'
               type='text'
               name='lookingForAJobDescription'
               component={Textarea}
        />
        {Object.keys(model).map(key => <Field placeholder={key}
                                              key={key}
                                              type='text'
                                              name={key}
                                              component={Textarea}
        />)}

    </form>
}
export const ProfileForm = reduxForm<ProfileDataFormDataType>({
    form: 'profileInfoForm'
})(ProfileDataForm)