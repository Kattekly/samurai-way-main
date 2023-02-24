import React from 'react';
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import {ProfileUserPropsType} from "../../Redux/Profile-reducer";


export type ProfileNewType = {
    profile: ProfileUserPropsType
    status: string
    updateStatusThunk: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

const Profile = (props: ProfileNewType) => {
    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://img2.fonwall.ru/o/gw/gory-zakat-solnce.jpg?route=thumb&h=350"/>*/}
            {/*</div>*/}
            <ProfileInfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk} isOwner={props.isOwner} savePhoto={props.savePhoto}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;