import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://img2.fonwall.ru/o/gw/gory-zakat-solnce.jpg?route=thumb&h=350"/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + Dis
            </div>
        </div>
    )
};

export default ProfileInfo;