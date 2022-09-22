import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: string
    name: string
}

type MessageItemType = {
    text: string
}

const DialogItem = (props: DialogItemType) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props: MessageItemType) => {
    return <div className={s.message}>{props.text}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               <DialogItem name="Katerina" id="1"/>
               <DialogItem name="Vladimir" id="2"/>
               <DialogItem name="Andrey" id="3"/>
               <DialogItem name="Valera" id="4"/>
               <DialogItem name="Maksim" id="5"/>
               <DialogItem name="Maria" id="6"/>
            </div>
            <div className={s.messages}>
                <Message text="Hi" />
                <Message text="How are you?" />
                <Message text="Yo" />
            </div>
        </div>
    );
};

export default Dialogs;