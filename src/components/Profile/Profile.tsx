import React from 'react';
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";

import {ProfileUserPropsType} from "../../Redux/profile-reducer";
import s from "./Profile.module.css"
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {v1} from "uuid";

export type ProfileNewType = {
    profile: ProfileUserPropsType | null
    status: string
    updateStatusThunk: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileUserPropsType) => Promise<any>
}

const Profile = (props: ProfileNewType) => {
    return (
        <div>
            <div >
                <img className={s.headerImg} alt='big content'
                     src='https://sun9-28.userapi.com/impf/IZV8ZqKT5iFUZ5RcKf17lskCX9W354PG0UFpWg/BogcuCe_SGc.jpg?size=1920x768&quality=95&crop=0,25,2560,1022&sign=0cc3f2d38c31cc82955bebdec766f149&type=cover_group'/>
            </div>
                <ProfileInfo profile={props.profile} saveProfile={props.saveProfile} status={props.status}
                             updateStatusThunk={props.updateStatusThunk} isOwner={props.isOwner}
                             savePhoto={props.savePhoto}/>
            <MyPostsContainer addPost={() => {}} key={''} newPostText={''} updateNewPostText={() => {}} newMessageText={''} dispatch={() => {}}/>
        </div>
    );
};

export default Profile;