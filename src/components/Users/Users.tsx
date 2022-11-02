import React from 'react';
import {UsersPropsType} from "../../Redux/User-reduser";


type NewUserPropsType = {
    usersPage: UsersPropsType

}

const Users = (props: NewUserPropsType) => {
    return (
        <div>
            {
                props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img/>
                    </div>
                </span>
                    <span>
                    <div>
                        <button>Follow</button>
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