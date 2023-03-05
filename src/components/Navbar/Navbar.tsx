import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';
import BuildIcon from '@material-ui/icons/Build';

function HomeIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

console.log(s)
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <HomeIcon color="primary" className={s.icon}/>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <BuildIcon color="primary" fontSize="small"/>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;