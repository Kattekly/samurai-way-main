import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
    DialogsDataType, pushMessageBodyCreator,
    RootStateType,
    sendMessageCreator,
    StorePropsType,
} from "../../Redux/State";

type DialogNewType = {
    store: StorePropsType
}
const Dialogs = (props: DialogNewType) => {
 let state = props.store.getState().profilePage

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = state.messages.map(m => <Message message={m.message} id={m.id}/>)

    let newMessageBody = state.newMessageText;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(pushMessageBodyCreator(body))
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