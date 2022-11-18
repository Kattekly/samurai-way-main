import React from 'react';
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";

import {AppPropsType, MessageType} from "../../App";
import MyPostsContainer from "./My posts/MyPostsContainer";
import {Store} from "redux";
import {ReduxStateType} from "../../Redux/Redux-Stor";
import {ActionTypes} from "../../Redux/State";


type ProfileNewType = {
    store: Store<ReduxStateType, ActionTypes>
}

const Profile = () => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;