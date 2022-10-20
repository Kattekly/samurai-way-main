import React from 'react';
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";
import {AppPropsType, MessageType} from "../../App";

const Profile = (props: MessageType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts

                posts={props.posts}
                /*newPostText={props.newPostText}*/
                dispatch={props.dispatch}
               /* addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}*/
            />
        </div>
    );
};

export default Profile;