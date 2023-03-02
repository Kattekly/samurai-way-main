import React from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from "../../../Redux/state";


const Message = (props: MessageType) => {

    let newMessageElement = React.createRef <HTMLTextAreaElement>()

    let addMessage = () => {
        let text = newMessageElement.current?.value;
        alert(text)
    }

    return <div>
        <div className={s.message}>{props.message}</div>
    </div>
}

export default Message;