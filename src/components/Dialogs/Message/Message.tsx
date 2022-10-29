import React from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from "../../../Redux/State";


const Message = (props: MessageType) => {

    let newMessageElement = React.createRef <HTMLTextAreaElement>()

    let addMessage = () => {
        let text = newMessageElement.current?.value;
        alert(text)
    }

    return <div>
   <div className={s.message}>{props.message}</div>
    {/*<div>*/}
    {/*    <textarea ref={newMessageElement}></textarea >*/}
    {/*</div>*/}
    {/*<div>*/}
    {/*    <button onClick={addMessage}>Add message</button>*/}
    {/*</div>*/}
    </div>
}

export default Message;