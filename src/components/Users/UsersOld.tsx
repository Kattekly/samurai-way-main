import React from 'react';
import s from './Users.module.css'
import {NewUserPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

const UsersOld = (props: NewUserPropsType) => {

    let getUsers = () => {
        if (props.usersPage.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger
                props.setUsers(response.data.items)
            })
        }
    }

    return (

        <div className={s.usersItems}>
            <button onClick={getUsers}>Get Users</button>
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
    );
};

export default UsersOld;