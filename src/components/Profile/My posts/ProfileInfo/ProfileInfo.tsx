import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileUserPropsType} from "../../../../Redux/Profile-reducer";
import userPhoto from '../../../../assets/images/user.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileUserPropsType
    status: string
    updateStatusThunk: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatusThunk}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {profile.fullName}
                {profile.lookingForAJobDescription}
                <ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk}/>
            </div>
        </div>
    )
};

export default ProfileInfo;