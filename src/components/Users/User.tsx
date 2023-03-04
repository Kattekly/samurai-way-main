import React from 'react';
import userPhoto from "../../assets/images/user2.jpg";
import {UsersPropsType} from "../../Redux/user-reduser";
import {NavLink} from "react-router-dom";

type UserType = {
    user: UsersPropsType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


const User: React.FC<UserType> = ({user, followingInProgress, unfollow, follow, ...props}) => {

    return (
        <div>
                <span>
                    <div>
                        <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                </span>
            <span>
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress.some(id => id == user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>Unfollow</button>

                            : <button disabled={followingInProgress.some(id => id == user.id)} onClick={() => {
                                follow(user.id)
                            }}>Follow</button>}

                    </div>
                </span>
            <span>
    <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
    </span>
    <span>
        <div>{'user.location.country'}</div>
        <div>{"user.location.city"}</div>
    </span>
</span>
        </div>)

};

export default User;