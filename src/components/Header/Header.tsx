import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logOut: () => {}
}

const Header = (props: HeaderPropsType) => {
    console.log({props})

    const dispatch = useDispatch()

    const onClickLogoutHandler = () => {
        dispatch(props.logOut())
    }

    return (
        <header className={s.header}>
            <img
                src="https://e7.pngegg.com/pngimages/342/288/png-clipart-globe-logo-music-globe-miscellaneous-map.png"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={onClickLogoutHandler}>Выйти</button></div>
                    : <NavLink to={'/login'}>Войти</NavLink>}
            </div>
        </header>
    );
};

export default Header;