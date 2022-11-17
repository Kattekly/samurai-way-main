import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

const UsersFunc = () => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.usersItems}>
        <div>
            {pages.map(p => {
                return <span className={String(props.currentPage === p && s.selectedPage)} onClick={() => {
                    onPageChange(p)
                }}>{p}</span>
            })}
        </div>
        {
            props.usersPage.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photos.small !== null ? el.photos.small : userPhoto}/>
                    </div>
                </span>
                <span>
                    <div>
                        {el.followed ? <button onClick={() => {
                                props.unfollow(el.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(el.id)
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

export default UsersFunc;