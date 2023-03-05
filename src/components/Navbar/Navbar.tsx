import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import HeadsetIcon from '@material-ui/icons/Headset';
import PeopleIcon from '@material-ui/icons/People';
import TextsmsIcon from '@material-ui/icons/Textsms';
import WebAssetIcon from '@material-ui/icons/WebAsset';


console.log(s)
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <HomeIcon color="primary" fontSize="small"/>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <TextsmsIcon color="primary" fontSize="small"/>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <PeopleIcon color="primary" fontSize="small"/>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <WebAssetIcon color="primary" fontSize="small"/>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <HeadsetIcon color="primary" fontSize="small"/>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <BuildIcon color="primary" fontSize="small"/>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.reclama}>
                Place for your advertisement:
                <img  alt='big content'
                     src='https://i.pinimg.com/originals/8c/f2/c2/8cf2c2b62722f1971a7aad52fc597d22.jpg'/>
            </div>
        </nav>
    );
};

export default Navbar;