import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NewUserPropsType} from "./UsersContainer";
import axios from "axios";

class Users extends React.Component {

    getUsers = () => {
        if (this.props.usersPage.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger
                this.props.setUsers(response.data.items)
            })
        }
    }


render() {
    return <div className={s.usersItems}>
        <button onClick={this.getUsers}>Get Users</button>
        {
            this.props.usersPage.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photos.small !== null ? el.photos.small : userPhoto}/>
                    </div>
                </span>
                <span>
                    <div>
                        {el.followed ? <button onClick={() => {
                                this.props.unfollow(el.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(el.id)
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
}

export default Users;