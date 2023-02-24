import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileUserPropsType} from "../../../../Redux/Profile-reducer";
import userPhoto from '../../../../assets/images/user.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileUserPropsType
    status: string
    updateStatusThunk: (status: string) => void
    isOwner: boolean
    savePhoto: () => void
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

                {profile.fullName}
                {profile.lookingForAJobDescription}
                <ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk}/>
            </div>
        </div>
    )
};

export default ProfileInfo;