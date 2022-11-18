import React from 'react';
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
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