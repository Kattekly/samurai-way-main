import React from 'react';
import {UsersMaxPropsType, UsersPropsType} from "../../Redux/User-reduser";
import s from './Users.module.css'

type NewUserPropsType = {
    usersPage: UsersPropsType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersPropsType) => void
}

const Users = (props: NewUserPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://vorkuta.butterfly-flower.ru/img/work/nomencl/a_1993_11404.jpg",
                followed: false,
                fullName: "Katerina",
                status: "I am a boss",
                location: {city: "Rybinsk", country: "Russia"}
            },
            {
                id: 2,
                photoUrl: "https://vorkuta.butterfly-flower.ru/img/work/nomencl/a_1993_11404.jpg",
                followed: true,
                fullName: "Vladimir",
                status: "Hey, hoy!",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: "https://vorkuta.butterfly-flower.ru/img/work/nomencl/a_1993_11404.jpg",
                followed: false,
                fullName: "Marina",
                status: "Sun",
                location: {city: "Minsk", country: "Belarus"}
            }
        ])
    }
    return (
        <div className={s.usersItems}>
            {
                props.usersPage.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photoUrl}/>
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
        <div>{el.fullName}</div>
        <div>{el.status}</div>
    </span>
    <span>
        <div>{el.location.country}</div>
        <div>{el.location.city}</div>
    </span>
</span>
                </div>)
            }
        </div>
    );
};

export default Users;