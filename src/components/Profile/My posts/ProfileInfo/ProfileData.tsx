import {FC} from "react";
import {Contact} from "./ProfileInfo";

export type ProfileUserType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

type ProfileDataPropsType = {
    profile: ProfileUserType
}
export const ProfileData:FC<ProfileDataPropsType> = ({profile}) => {
    return (
        <div>
            <span> About me: {profile.aboutMe} </span>
            <span> Looking for a job: {profile.lookingForAJob ? "✅" : ""}</span>
            {profile.lookingForAJob && <span> Skills: {profile.lookingForAJobDescription}</span>}
            <span> Contacts: </span>
            {Object.entries(profile.contacts)
                .map(elem => <Contact key={elem[0]} contactTitle={elem[0]} contactValue={elem[1]}/>)}
        </div>
    )
}