import React from 'react';
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

const Profile = (props: ProfilePageType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} />
        </div>
    );
};

export default Profile;