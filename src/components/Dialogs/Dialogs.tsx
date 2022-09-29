import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Katerina"},
        {id: 2, name: "Vladimir"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Valera"},
        {id: 5, name: "Maksim"},
        {id: 6, name: "Maria"}
    ]

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
    ]

    let dialogsElement = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
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