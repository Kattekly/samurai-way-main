import s from "./DialogsMessages.module.css";

import React from "react";


type DialogsMessagesProps = {
    message: string
    avatar?: string
    key: string
}
export const DialogsMessages = (props: DialogsMessagesProps) => {
    return (
        <div className={s.messageContainer}>
            <img className={s.avatar} src={props.avatar} alt={'avatar'}/>
            <div className={s.messageBox}>
                <span className={s.message}>{props.message}</span>
            </div>
        </div>
    )
}