import React from 'react';
import s from "./Profile.module.css";
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://img2.fonwall.ru/o/gw/gory-zakat-solnce.jpg?route=thumb&h=350"/>
            </div>
            <div>Ava + Dis</div>
            <div>My Posts
                <div>New posts</div>
            </div>
            <div>
                <div className= {s.item}>
                    post1
                </div>
                <div className= {s.item}>
                    post2
                </div>
            </div>

        </div>
    );
};

export default Profile;