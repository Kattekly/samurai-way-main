import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {UserAvatar} from "../Profile/UserAvatar/UserAvatar";
import {IconButton} from "@material-ui/core";
import {ExitToApp} from "@material-ui/icons";


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logOut: () => {}
    avatar: string
}

const Header = (props: HeaderPropsType) => {
    console.log({props})

    const dispatch = useDispatch()

    const onClickLogoutHandler = () => {
        dispatch(props.logOut())
    }

    return (
        <header className={s.header}>
            <div className={s.imgWrapper}>
                <img
                    alt={"logo"}
                    src={'https://sun6-22.userapi.com/s/v1/ig2/6EuMk1EjzsaN84R8DYTTnCoPiR4FBc-A93x-PXD_UJeNcNPdWp_j-OzKuDzPwGTUDm4xfHlaDCscM4HvDeGPT0EF.jpg?size=864x864&quality=95&crop=108,108,864,864&ava=1'}>

                </img>


            </div>
            <div className={s.titleWrapper}>
                    <span className={s.name}>SOCIAL NETWORK</span>
            </div>
                {props.isAuth
                    ? <div className={s.loginBlock}>
                        <span>{props.login}</span>
                        <UserAvatar img={props.avatar} size={36}/>
                        <IconButton onClick={onClickLogoutHandler} style={{color: 'black'}}>
                            <ExitToApp/>
                        </IconButton>
                    </div>
                    : <NavLink to={'/login'}
                               className={(isActive) => isActive ? s.active : s.link}>
                        Login
                    </NavLink>}
        </header>
    );
};

export default Header;