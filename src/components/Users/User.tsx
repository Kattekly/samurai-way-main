import React from 'react';
import userPhoto from "../../assets/images/user.png";
import {UsersPropsType} from "../../Redux/User-reduser";
import {NavLink} from "react-router-dom";

type UserType = {
    user: UsersPropsType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


const User: React.FC<UserType> = ({user, followingInProgress, unfollow, follow, ...props}) => {

    let el = user

    return (
        <div>
                <span>
                    <div>
                        <NavLink to={"/profile/" + el.id}>
                        <img src={el.photos.small !== null ? el.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                </span>
            <span>
                    <div>
                        {el.followed ?
                            <button disabled={followingInProgress.some(id => id == el.id)} onClick={() => {

                                unfollow(el.id)

                            }}>Unfollow</button>

                            : <button disabled={followingInProgress.some(id => id == el.id)} onClick={() => {

                                follow(el.id)

                            }}>Follow</button>}

                    </div>
                </span>
            <span>
    <span>
        <div>{el.name}</div>
        <div>{el.status}</div>
    </span>
    <span>
        <div>{'el.location.country'}</div>
        <div>{"el.location.city"}</div>
    </span>
</span>
        </div>)

};

export default User;