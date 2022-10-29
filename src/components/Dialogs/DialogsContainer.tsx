import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {StorePropsType} from "../../Redux/State";
import {sendMessageCreator, updateMessageBodyCreator} from "../../Redux/Dialogs-reduser";
import Dialogs from "./Dialogs";

type DialogNewType = {
    store: StorePropsType
}
const DialogsContainer = (props: DialogNewType) => {
 let state = props.store.getState().profilePage
    let dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElement = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    let newMessageBody = state.newMessageText;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateMessageBodyCreator(body))
    }

    return (
       <Dialogs store={props.store} updateMessageBodyCreator={onNewMessageChange }/>
    );
};

export default DialogsContainer;