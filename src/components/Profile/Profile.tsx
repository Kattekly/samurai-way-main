import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./My posts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://img2.fonwall.ru/o/gw/gory-zakat-solnce.jpg?route=thumb&h=350"/>
            </div>
            <div>Ava + Dis</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;