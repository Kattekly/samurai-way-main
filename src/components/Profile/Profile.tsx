import React from 'react';
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import {ProfileUserPropsType} from "../../Redux/profile-reducer";


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
            <ProfileInfo profile={props.profile} saveProfile={props.saveProfile} status={props.status}
                         updateStatusThunk={props.updateStatusThunk} isOwner={props.isOwner}
                         savePhoto={props.savePhoto}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;