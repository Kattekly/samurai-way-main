import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
}

type MessageItemType = {
    id: number
    message: string
}

const DialogItem = (props: DialogItemType) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props: MessageItemType) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Katerina"},
        {id: 2, name: "Vladimir"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Valera"},
        {id: 5, name: "Maksim"},
        {id: 6, name: "Maria"}
    ]

    let dialogsElement= dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
    ]

    let messageElement = messagesData.map(message => <Message message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    );
};

export default Dialogs;