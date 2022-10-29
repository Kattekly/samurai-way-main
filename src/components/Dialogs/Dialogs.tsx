import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsDataType, StorePropsType} from "../../Redux/State";
import {sendMessageCreator, updateMessageBodyCreator} from "../../Redux/Dialogs-reduser";

type DialogNewType = {
    store: StorePropsType
    updateMessageBodyCreator: (body: string) => void
    sendMessageCreator: () => void
    profilePage: DialogsDataType
}
const Dialogs = (props: DialogNewType) => {
 let state = props.profilePage
    let dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElement = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    let newMessageBody = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessageCreator()
       /* props.store.dispatch(sendMessageCreator())*/
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateMessageBodyCreator(body)
        /*props.store.dispatch(updateMessageBodyCreator(body))*/
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <img src='https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-60-scaled.jpg'/>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;