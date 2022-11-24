import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

type HeaderPropsType = {

}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://e7.pngegg.com/pngimages/342/288/png-clipart-globe-logo-music-globe-miscellaneous-map.png"/>
            <div className={s.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    );
};

export default Header;