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
                src="https://sun6-22.userapi.com/s/v1/ig2/6EuMk1EjzsaN84R8DYTTnCoPiR4FBc-A93x-PXD_UJeNcNPdWp_j-OzKuDzPwGTUDm4xfHlaDCscM4HvDeGPT0EF.jpg?size=864x864&quality=95&crop=108,108,864,864&ava=1"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={onClickLogoutHandler}>Выйти</button></div>
                    : <NavLink to={'/login'}>Войти</NavLink>}
            </div>
        </header>
    );
};

export default Header;