import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import {DialogsDataType} from "../../Redux/state";
import {MessageReduxForm} from "./Message/MessageForm";
import {DialogsItems} from "./DialogItem/DialogsItems";

export type DialogNewType = {

    updateMessageBodyCreator: (body: string) => void
    sendMessageCreator: (newMessageText: string) => void
    profilePage: DialogsDataType
    isAuth: boolean
}


const Dialogs = (props: DialogNewType) => {
    let state = props.profilePage

    let dialogsElement = state.dialogs.map(elem => <DialogsItems id={elem.id} name={elem.name} avatar={elem.avatar} key={elem.id}/>)
    let messageElement = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    let newMessageBody = state.newMessageText;

    let addNewMessage = (value: any) => {
        props.sendMessageCreator(value.newMessageText)
    }

    return (
        <div className={s.dialogsContainer}>

            <div className={s.dialogsItems}>
               {/* <img src='https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-60-scaled.jpg'/>*/}
                {dialogsElement}

            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>

                <div className={s.addDialogContainer}>
                    <MessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
};


export default Dialogs;