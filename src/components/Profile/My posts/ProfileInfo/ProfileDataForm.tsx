import React from "react";
import {createField, GetStringKeys, Input, Textarea} from "../../../common/FormControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import s from './ProfileDataForm.module.css'
import {ProfileUserPropsType} from "../../../../Redux/profile-reducer";
import {Box} from "../../../common/Box/Box";

export type PropsType = {
    profile: ProfileUserPropsType
}
type ProfileTypeKeys = GetStringKeys<ProfileUserPropsType>

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileUserPropsType, PropsType> & PropsType> = ({
                                                                                                              handleSubmit,
                                                                                                              profile,
                                                                                                              error
                                                                                                          }) => {
    return <div>
        <Box title={'My information'}>
            <form onSubmit={handleSubmit} id="myForm" className={s.formContainer}>

                {error && <div className={s.formSummaryError}>
                    {error}
                </div>

                }
                <div>
                    <b>Full name</b>: {createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}
                </div>
                <div>
                    <b>Looking for a
                        job</b>: {createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"})}
                </div>

                <div>
                    <b>My professional skills</b>:
                    {createField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", [], Textarea)}
                </div>


                <div>
                    <b>About me</b>:
                    {createField<ProfileTypeKeys>("About me", "aboutMe", [], Textarea)}
                </div>
                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                    </div>
                })}
                </div>

                <div>
                    <button className={s.buttonClass}>Save</button>
                </div>
            </form>
        </Box>
    </div>
}

const ProfileDataFormReduxForm = reduxForm<ProfileUserPropsType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;