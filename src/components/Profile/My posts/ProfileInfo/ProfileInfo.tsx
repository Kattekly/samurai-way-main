import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileUserPropsType} from "../../../../Redux/Profile-reducer";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileUserPropsType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://img2.fonwall.ru/o/gw/gory-zakat-solnce.jpg?route=thumb&h=350"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                {props.profile.fullName}
                {props.profile.lookingForAJobDescription}
                <ProfileStatus status={"Hello"}/>
            </div>
        </div>
    )
};


export default ProfileInfo;