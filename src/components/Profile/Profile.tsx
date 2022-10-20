import React from 'react';
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";
import {AppPropsType} from "../../App";

const Profile = (props: AppPropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts

                posts={props.store._state.messagePage.posts}
                /*newPostText={props.newPostText}*/
                dispatch={props.dispatch}
               /* addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}*/
            />
        </div>
    );
};

export default Profile;