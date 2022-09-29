import React from 'react';
import s from './../Dialogs.module.css'

type MessageItemType = {
    id: number
    message: string
}

const Message = (props: MessageItemType) => {
    return <div className={s.message}>{props.message}</div>
}

export default Message;