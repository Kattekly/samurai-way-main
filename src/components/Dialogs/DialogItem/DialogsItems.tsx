import React from 'react';
import s from './DialogsItems.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemsProps = {
    id: number
    name: string
    avatar: string
    key: number
}

export const DialogsItems = (props: DialogsItemsProps) => {
    return (
        <div className={s.dialogsItems}>
            <NavLink to={'/dialogs/' + props.id}>
                {props.name}
                <img className={s.avatar} src={props.avatar} alt={'avatar'}/>
            </NavLink>

        </div>
    )
}