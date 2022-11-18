import React from 'react';
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";

import {AppPropsType, MessageType} from "../../App";
import MyPostsContainer from "./My posts/MyPostsContainer";
import {Store} from "redux";
import {ReduxStateType} from "../../Redux/Redux-Stor";
import {ActionTypes, ProfilePageType} from "../../Redux/State";
import {ProfileUserPropsType} from "../../Redux/Profile-reducer";


type ProfileNewType = {
    profile: ProfileUserPropsType
}

const Profile = (props: ProfileNewType) => {


    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;