import React from 'react';
import s from './DialogsItems.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../Redux/state";


// const DialogItem = (props: DialogType) => {
//     return <div className={s.dialog + ' ' + s.active}>
//         <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
//     </div>
// }
//
//
// export default DialogItem;

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