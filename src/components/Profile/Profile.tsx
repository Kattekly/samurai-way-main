import React from 'react';
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";
import {addPost, ProfilePageType} from "../../Redux/State";

const Profile = (props: ProfilePageType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;