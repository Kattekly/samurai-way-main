import React from "react";
import {CheckboxTC, GetStringKeys, TextareaFC} from "../../../common/FormControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from './ProfileDataForm.module.css'
import {ProfileUserPropsType} from "../../../../Redux/profile-reducer";
import {Box} from "../../../common/Box/Box";
import {required} from "../../../../utils/validators/validators";

export type PropsType = {
    profile: ProfileUserPropsType
}
type ProfileTypeKeys = GetStringKeys<ProfileUserPropsType>

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileUserPropsType, PropsType> & PropsType> = ({
                                                                                                              handleSubmit,
                                                                                                              profile,
                                                                                                              error
                                                                                                          }) => {
    const contacts = {
        facebook: '',
        website: '',
        vk: '',
        twitter: '',
        instagram: '',
        youtube: '',
        github: '',
        mainLink: '',
    }

    return <div>
        <Box title={'My information'}>
            <form onSubmit={handleSubmit} id="myForm" className={s.formContainer}>

                {error && <div className={s.formSummaryError}>{error}</div>}

                <Field placeholder='Full name'
                       type='text'
                       name='fullName'
                       component={TextareaFC}
                       validate={[required]}
                />
                <Field placeholder='About me'
                       type='text'
                       name='aboutMe'
                       component={TextareaFC}
                       validate={[required]}
                />
                <Field type='checkbox'
                       name='lookingForAJob'
                       component={CheckboxTC}
                       validate={[required]}
                       label='Looking for a job'/>
                <Field placeholder='Skills'
                       type='text'
                       name='lookingForAJobDescription'
                       component={TextareaFC}
                />
                <h3 className={s.title}>Me contacts</h3>
                {Object.keys(contacts).map(key => <Field placeholder={key}
                                                         key={key}
                                                         type='text'
                                                         name={key}
                                                         component={TextareaFC}
                />)}

                <div>
                    <button className={s.buttonClass}>Save</button>
                </div>
            </form>
        </Box>
    </div>
}

const ProfileDataFormReduxForm = reduxForm<ProfileUserPropsType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;