import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import {ContactPropsType, ProfileUserPropsType} from "../../../../Redux/profile-reducer";
import userPhoto from '../../../../assets/images/user2.jpg'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import {UserAvatar} from "../../UserAvatar/UserAvatar";
import {Button} from "@material-ui/core";


type ProfileInfoPropsType = {
    profile: ProfileUserPropsType | null
    status: string
    updateStatusThunk: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileUserPropsType) => Promise<any>
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                         profile,
                                                         status,
                                                         updateStatusThunk,
                                                         isOwner,
                                                         savePhoto,
                                                         saveProfile
                                                     }) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length) {
            savePhoto(event.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileUserPropsType) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.avatarContainer}>
                    <UserAvatar img={profile.photos.large || userPhoto}
                                savePhoto={savePhoto}
                                size={200}
                                isOwner={isOwner}/>


                </div>
                {/* <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}*/}

                <div className={s.profileInfo}>
                    <span>{profile.fullName}
                        <ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk}/>
                    </span>
                </div>

                <div className={s.infoContainer}>
                    {editMode
                        ? <ProfileDataForm onSubmit={onSubmit} profile={profile} initialValues={profile}/>
                        : <ProfileData profile={profile} isOwner={isOwner} toEditMode={() => {
                            setEditMode(true)
                        }}/>}
                </div>

            </div>
        </div>
    )
};

type ProfileDataPropsType = {
    profile: ProfileUserPropsType
    isOwner: boolean
    toEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, toEditMode}) => {
    return <div>

        {isOwner && <div>
            <Button variant="outlined" color="primary" onClick={toEditMode}>Edit profile</Button>
        </div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }

        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {
            Object
                .keys(profile.contacts)
                .map((key) => {
                    return <Contact key={key} contactTitle={key}
                                    contactValue={profile.contacts[key as keyof ContactPropsType]}/>
                })}
        </div>
    </div>
}

type ContactType = {
    contactTitle: string
    contactValue: string
}

export const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}


export default ProfileInfo;