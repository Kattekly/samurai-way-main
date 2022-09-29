import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {dialogsData, messagesData} from "../../Redux/State";


const Dialogs = () => {

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