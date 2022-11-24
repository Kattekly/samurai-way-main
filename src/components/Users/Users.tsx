import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { UsersPropsType} from "../../Redux/User-reduser";
import {NavLink} from "react-router-dom";
import {FollowAPI, UnfollowAPI} from "../../api/Api";

type UsersFuncPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    users: Array<UsersPropsType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: []
    toggleFollowingProgress: (isFetching: boolean) => void
}


const Users = (props: UsersFuncPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div className={s.usersItems}>
        <div>
            {pages.map(p => {
                return <span className={String(props.currentPage === p && s.selectedPage)} onClick={() => {
                    props.onPageChange(p)
                }}>{p}</span>
            })}
        </div>
        {
            props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + el.id}>
                        <img src={el.photos.small !== null ? el.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                </span>
                <span>
                    <div>
                        {el.followed ? <button disabled={props.followingInProgress.some(id => id == el.id)} onClick={() => {
                            debugger
                                props.toggleFollowingProgress(true)
                                UnfollowAPI.deleteUnfollow(el.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.unfollow(el.id)
                                    }
                                    props.toggleFollowingProgress(false)
                                })

                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id == el.id)}  onClick={() => {
                                props.toggleFollowingProgress(true)
                                FollowAPI.postFollow(el.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.follow(el.id)
                                    }
                                    props.toggleFollowingProgress(false)
                                })
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
        }
    </div>
};

export default Users;