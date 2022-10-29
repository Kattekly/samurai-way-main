import React from 'react';
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";

import {AppPropsType, MessageType} from "../../App";
import MyPostsContainer from "./My posts/MyPostsContainer";


const Profile = (props: MessageType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;