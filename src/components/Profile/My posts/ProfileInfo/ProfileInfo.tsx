import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import {ContactPropsType, ProfileUserPropsType} from "../../../../Redux/Profile-reducer";
import userPhoto from '../../../../assets/images/user.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileUserPropsType
    status: string
    updateStatusThunk: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

type NewType = {
    profile: ProfileUserPropsType
}

export type ContactType = {
    contacts: ContactPropsType
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatusThunk, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            savePhoto(event.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}

                {editMode ? <ProfileDataForm profile={profile}/> : <ProfileData profile={profile}/>}

                <ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk}/>
            </div>
        </div>
    )
};

const ProfileData: React.FC<NewType> = ({profile}) => {
    return <>
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professionals skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </>
}
const ProfileDataForm: React.FC<NewType> = ({profile}) => {
    return <>
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professionals skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </>
}


const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;