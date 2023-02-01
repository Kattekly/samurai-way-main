import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersPropsType} from "../../Redux/User-reduser";
import {NavLink} from "react-router-dom";
import {FollowAPI, UnfollowAPI} from "../../api/Api";
import Pagination from "../common/Pagination/Pagination";

type UsersFuncPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    users: Array<UsersPropsType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
    // toggleFollowingProgress: (isFetching: boolean, id: number) => void
}


const Users: React.FC<UsersFuncPropsType> = ({currentPage, onPageChange, totalUsersCount, pageSize, ...props}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div className={s.usersItems}>
        <Pagination currentPage={currentPage} onPageChange={onPageChange} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        {/*<div>
            {pages.map(p => {
                return <span className={String(props.currentPage === p && s.selectedPage)} onClick={() => {
                    props.onPageChange(p)
                }}>{p}</span>
            })}
        </div>*/}
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
                        {el.followed ?
                            <button disabled={props.followingInProgress.some(id => id == el.id)} onClick={() => {

                                props.unfollow(el.id)

                                /*props.toggleFollowingProgress(true, el.id)
                                UnfollowAPI.deleteUnfollow(el.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.unfollow(el.id)
                                    }
                                    props.toggleFollowingProgress(false, el.id)
                                })*/

                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id == el.id)} onClick={() => {

                                props.follow(el.id)

                                /*props.toggleFollowingProgress(true, el.id)
                                FollowAPI.postFollow(el.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.follow(el.id)
                                    }
                                    props.toggleFollowingProgress(false, el.id)
                                })*/
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